import { getSignInData, isSignedIn } from '../users/authentication'

/**
 * Updates page title.
 * This is called whenever the name of the street changes and it affects
 * the document title.
 */
export function updatePageTitle (street) {
  let title = ''

  if (street.creatorId && (!isSignedIn() || (getSignInData().userId !== street.creatorId))) {
    title = getPageTitleWithAuthor(street)
  } else {
    title = getPageTitle(street)
  }

  document.title = title
}

/**
 * Gets page title without author name.
 * Displayed when a street has an anonymous creator, if the creator is the
 * current user, and for uses where displaying an author name is not needed,
 * e.g. Facebook sharing
 */
export function getPageTitle (street) {
  return `${street.name} – Streetmix`
}

/**
 * Gets page title with author name.
 * Displayed when a street has an creator
 */
export function getPageTitleWithAuthor (street) {
  return `${street.name} (by ${street.creatorId}) – Streetmix`
}
