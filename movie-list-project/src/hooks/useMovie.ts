import { ref } from 'vue'
import { useCategoryImages } from '@/hooks/useAssets'

export interface Movie {
  id: number
  title: string
  coverUrl: string
  category: string
  duration: string
}

export const useMovieList = () => {
  const movies = ref<Movie[]>([])
  const { categories } = useCategoryImages()
  let index = -1
  movies.value = moviesData.map<Movie>((movie) => {
    index++
    return {
      id: index,
      title: movie.title,
      coverUrl: categories.value[index].imgUrl,
      category: categories.value[index].name,
      duration: movie.duration
    }
  })

  const loadMore = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newData = moviesData.slice(0, 5).map<Movie>((movie, i) => {
      index++
      return {
        id: index,
        title: movie.title,
        coverUrl: categories.value[i].imgUrl,
        category: categories.value[i].name,
        duration: movie.duration
      }
    })

    movies.value = [...movies.value, ...newData]
  }

  return { movies, loadMore }
}

const moviesData: Movie[] = [
  {
    id: 1,
    title: '侠在江湖漂',
    coverUrl: '',
    category: '',
    duration: '04\'23"'
  },
  {
    id: 2,
    title: '血战上海滩2',
    coverUrl: '',
    category: '',
    duration: '05\'03"'
  },
  {
    id: 3,
    title: '谎言',
    coverUrl: '',
    category: '',
    duration: '45\'34"'
  },
  {
    id: 4,
    title: '铁血鳄魂（2010）',
    coverUrl: '',
    category: '',
    duration: '15\'43"'
  },
  {
    id: 5,
    title: '穿靴子的猫',
    coverUrl: '',
    category: '',
    duration: '08\'12"'
  },
  {
    id: 6,
    title: '七月与安生',
    coverUrl: '',
    category: '',
    duration: '02\'34"'
  },
  {
    id: 7,
    title: '兵临城下之决战要塞',
    coverUrl: '',
    category: '',
    duration: '08\'21"'
  },
  {
    id: 8,
    title: '第一滴血1',
    coverUrl: '',
    category: '',
    duration: '21\'12"'
  },
  {
    id: 9,
    title: '特工626',
    coverUrl: '',
    category: '',
    duration: '15\'34"'
  },
  {
    id: 10,
    title: '刑警兄弟',
    coverUrl: '',
    category: '',
    duration: '34\'25"'
  },
  {
    id: 11,
    title: '变形金刚2',
    coverUrl: '',
    category: '',
    duration: '09\'12"'
  },
  {
    id: 12,
    title: '媚影女特工2暗夜舞者',
    coverUrl: '',
    category: '',
    duration: '12\'32"'
  },
  {
    id: 13,
    title: '九品芝麻官',
    coverUrl: '',
    category: '',
    duration: '43\'25"'
  }
]
