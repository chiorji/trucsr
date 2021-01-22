# TRUCSR

[The live preview lives here](https://trucsr.netlify.app)

### IMPLEMENTATION DETAILS

Having known some section may require data from the backend, sections like the blog, services; which it's content will be dynamically fetched and added to the page; I resorted to mocking an API request
which;

- Serves a variable with the expected data after a timeout(500)

Since the **READ MORE** will need an url of the blog, I formatted the slug to be used as a placeholder for the blog url.

*(The above may be inconsequential, just trying to be somewhat creative though)*


### ISSUES / CHALLENGES

Issues/challenges am having and currently working to fix are;

- The header slide, having some bugs(maybe markup errors) that impacts correct display

- Correct alignment of **Our Story** sub-section of the about us section

- Correct alignment of the call to action buttons on the **Our Services** section

- Fixing the animation on the **Our Projects** section

- Fixing the animation on the **Our Partners** section