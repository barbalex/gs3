/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// https://github.com/gatsbyjs/gatsby/issues/9087#issuecomment-459105021
export const onServiceWorkerUpdateFound = () => window.location.reload(true)
