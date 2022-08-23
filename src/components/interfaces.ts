export interface PostProps {
  post: PostData;
  refresher: () => void;
  isEditing?: boolean;
  toogleEditing?: () => void;
}

export interface PostContainerProps {
  posts: PostData[];
  refresher: () => void;
}
export interface PostData {
  id: string;
  content: string;
  date: Date;
  like: number;
  dislike: number;
}

export interface CreatePostProps {
  refresher: () => void;
}
