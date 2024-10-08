export interface FilterOptions {
  filterBy: string[]
}

export interface FilterItemProps {
  title: string
  options: string[]
  changeFilter: (event: Event) => void
}
