function isValidRoutePage(page: any): boolean {
  if (page === undefined) {
    return false
  }
  return !/\D/.test(page) && Number(page) > 0
}

export {
  isValidRoutePage,
}
