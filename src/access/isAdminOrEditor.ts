import { Access } from 'payload'

// Only Admin or Editor
export const isAdminOrEditor: Access = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes('admin') || user?.roles?.includes('editor'))
}

export const isAdminOrEditorIfPublished: Access = ({ req: { user } }) => {
  // If logged in
  if (user) {
    // If is admin or editor
    if (user.roles?.includes('admin')) return true
    if (user.roles?.includes('editor')) return true
  }
  // Non-logged in users can only access published
  return {
    _status: {
      equals: 'published',
    },
  }
}
