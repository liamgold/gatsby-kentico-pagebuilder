const path = require("path")
const sql = require("msnodesqlv8")

function toPromise(f) {
  return function(args) {
    return new Promise((resolve, reject) => {
      function handler(err, res) {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      }

      if (args) {
        f(args, handler)
      } else {
        f(handler)
      }
    })
  }
}

async function getPageData() {
  const connectionString =
    "server=LIAMGOLD\\SQLEXPRESS;Database=Kentico12DancingGoat;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}"
  const query = `SELECT
    [DocumentName],
    [DocumentID],
    [DocumentPageBuilderWidgets],
    [NodeAliasPath]
  FROM
    [Kentico12DancingGoat].[dbo].[View_CMS_Tree_Joined]
  WHERE
    DocumentID != 1`

  let response

  const sqlOpen = toPromise(sql.open)
  try {
    const connection = await sqlOpen(connectionString)
    const connectionQuery = toPromise(connection.queryRaw)
    try {
      response = await connectionQuery(query)
      const close = toPromise(sql.close)
      await close()
    } catch (err) {
      console.log(err)
    }
  } catch (err) {
    console.log(err)
  }

  return response
}

exports.createPages = async ({ actions: { createPage } }) => {
  const template = path.resolve(`src/template.js`)

  await getPageData().then(
    function(results) {
      // Create pages for each JSON entry.
      results.rows.forEach(page => {
        const pageBuilderWidgets = page[2]
        const nodeAliasPath = page[3]
        let editableAreas = {}

        if (pageBuilderWidgets && pageBuilderWidgets.length) {
          editableAreas = JSON.parse(pageBuilderWidgets)
        }

        createPage({
          path: nodeAliasPath,
          component: template,
          context: {
            ...editableAreas,
          },
        })
      })
    },
    function(err) {
      console.log(err)
    }
  )
}
