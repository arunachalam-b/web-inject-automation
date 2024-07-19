## Web Inject Automation
Automate repetitive workflows in your web app development. 

---

This tool becomes handy when you have to cross multiple pages to reach your actual development page, this includes all the inputs and validations handled on each page. Adding to that some kind of libraries/frameworks (like React) let browsers cache a lot of content, that hot-reloading hardly works. Developed this tool, as I was put into such a frustrated development environment. Hopefully, many developers working in enterprise environment have this issue in common. 

---

## How to automate?
1. Upload the `inject.js` file in this repository to any cloud and make it publicly accessible
2. Create the set of actions you need to automate (refer `web-inject-automation.json` file in this repository)
3. Upload this actions JSON file into any open public cloud or serve it via your localhost (the latter is preferable, as it's easy to modify if needed)
4. Add a `<script>` tag in the root `html` file in your project. Add the `inject.js` file as your source url, and `actions_url` as the param to this source url pointing to the url of the actions JSON file
Eg. 
```html
<script src="https://example.com/web-inject-automation/inject.js?actions_url=http://localhost:8080/dev/actions"></script>
```

Run your app. You should be good to go, if you're able to see a floating action button with a robot. 
