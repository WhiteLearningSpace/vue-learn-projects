import { ref } from 'vue'

export interface Category {
  id: number
  name: string
  imgUrl: string
}

export const useCategoryImages = () => {
  const categories = ref<Category[]>([])

  const files = import.meta.glob('/src/assets/images/category/*.jpeg', { eager: true })
  let id: number = 0
  categories.value = Object.keys(files).map((path: string): Category => {
    const pathArr = path.split('/')
    const name = pathArr[pathArr.length - 1].replace('.jpeg', '')
    id++
    return <Category>{
      id: id,
      name: name,
      imgUrl: (files[path] as any).default
    }
  })

  return {
    categories
  }
}
