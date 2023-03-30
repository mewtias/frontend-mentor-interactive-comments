export interface CommentType {
  id: number
  content: string
  createdAt: string
  score: number
  replies?: Reply[]
  user: User
}

export interface User {
  username: string
  image: UserImage
}

export interface UserImage{
  png: string
  webp: string
}

export interface Reply extends CommentType {
  replyingTo: string
}