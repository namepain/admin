export function generateTitle (title) {
  const hasKey = this.$te('menu.' + title)

  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t('menu.' + title)

    return translatedTitle
  }
  return title
}
