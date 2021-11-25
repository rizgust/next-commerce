import useAddItem, { UseAddItem } from '@commerce/cart/use-add-item'
import { MutationHook } from '@commerce/utils/types'

export default useAddItem as UseAddItem<typeof handler>
export const handler: MutationHook<any> = {
  fetchOptions: {
    query: '',
  },
  async fetcher({ input, options, fetch }) {
    return input
  },
  useHook:
    ({ fetch }) =>
    () => {
      return async function addItem(input) {
        const data = await fetch({ input })
        console.log("ADD", data)
        return {}
      }
    },
}
