import type { DocumentData, Timestamp } from 'firebase/firestore'

export const convertDate = (
  snapshot: DocumentData,
  targetKey: Array<string>,
) => {
  targetKey.forEach((key) => {
    const value: Timestamp = snapshot[key]
    if (value) {
      snapshot[key] = value.toDate()
    }
  })
  return snapshot
}
