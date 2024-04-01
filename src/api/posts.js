import { baseAPI } from "./base"

export function getPosts(options) {
  return baseAPI.get("posts", options).then((res) => res.data)
}

export function getPost(postId, options) {
  return baseAPI.get(`posts/${postId}`, options).then((res) => res.data)
}
