<ol>
    <li>use the npm package "request-promise" in order to bring a specific search result from Google (for example: <code>https://www.google.com/search?&q=sport</code>)</li>
    <li>when the last request is complete (using async/await), display the first result's page content(for example: Sport5.co.il content)</li>
    <li>Save each search result page as an HTML file in the file system</li>
        <li>Then for every search result check if there is an existing HTML file which contains this result</li>
        <li>If there is an existing HTML file - display it. Otherwise - display the result from the web</li>
</ol>