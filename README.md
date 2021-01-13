# meteor-coreui-free-react-admin-template
Working version of the CoreUI free react admin template integrated into Meteor

This template can be used to bootstrap a meteor react core-ui admin site.

Meteor version 1.12.1

CoreUI version 3.4.0

## Meteor React packages

When creating a Meteor React component, use the new `useTracker`.

https://blog.meteor.com/introducing-usetracker-react-hooks-for-meteor-cb00c16d6222

```javascript
import { useTracker } from 'meteor/react-meteor-data'

// Hook, basic use, everything in one component
const MyProtectedPage = (pageId) => {
  const { user, isLoggedIn, page } = useTracker(() => {
    // The publication must also be secure
    const subscription = Meteor.subscribe('page', pageId)
    const page = Pages.findOne({ _id: pageId })
    const user = Meteor.user()
    const userId = Meteor.userId()
    const isLoggingIn = Meteor.loggingIn()
    return {
      page,
      isLoading: !subscription.ready(),
      user,
      userId,
      isLoggingIn,
      isLoggedIn: !!userId
    }
  }, [pageId])
  
  if (!isLoggedIn) {
    return <div>
      <Link to="/register">Create an Account</Link>
      <Link to="/login">Log in</Link>
    </div>
  }
  
  return <div>
    <h1>{page.title}</h1>
    <p>{page.content}</p>
    <a href="#" onClick={(e) => { e.preventDefault(); Meteor.logout(); }}>Log out ({user.username})</a>
  </div>
}
```
