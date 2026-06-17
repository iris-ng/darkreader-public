// DNR regexFilter patterns matching PDF navigations.
//
// We match only URLs whose *path* ends in `.pdf` (optionally followed by a query
// string or fragment). Kept deliberately narrow so URLs that merely *contain*
// ".pdf" — mid-path (`a.pdf/page`), as a different extension (`a.pdf.zip`), or in
// a query value (`page.html?file=a.pdf`) — are NOT hijacked into our viewer, which
// would then fail to load them. `[^?#]*` confines the match to the path component;
// `([?#].*)?$` allows a trailing query/fragment on a genuine `.pdf` resource.
export const PDF_URL_FILTER = "^https?://[^?#]*\\.pdf([?#].*)?$";
export const FILE_PDF_URL_FILTER = "^file://[^?#]*\\.pdf([?#].*)?$";
