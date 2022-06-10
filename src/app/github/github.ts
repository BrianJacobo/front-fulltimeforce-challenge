export class Commits {
  sha: string = '';
  node_id: string = '';
  commit: Commits = new Commits();
  url: string = '';
  html_url: string = '';
  comments_url: string = '';
  author: Object = {};
  committer: Object = {};
  parents: Array<Object> = [];
}
