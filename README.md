<H1>Marvel App</h1>
<br>
<p>This is a simple website that show all the marvel universe characters.</p>

<p>I made this just for fun....</p>

<h2>Specifications: </h2>

<p>I have used Marvel's api to build this website.</p>

<p>If you want to make the same or clone my project: </p>

<p> Just vist : <a href="https://developer.marvel.com">Marvel's Developer's Site</a> and create your own API keys </p>

<p> You will get a <strong>Public Key</strong> and a <strong> Private Key </strong> </p>

<br>

<p>After that you just have to clone this project and add a file in root directory named "cred.js"</p>
<p>In the file "cred.js" just write the following code: </p>

<p>export const ts_apikey_hash = "ts=YOUR_TS&apikey=YOUR_API_KEY&hash=YOUR_HASH"</p>

<ul>
    <li>YOUR_TS - It just any number you wish (make sure its +ve integers)</li>
    <li>YOUR_API_KEY - It is your PUBLIC KEY</li>
    <li>YOUR_HASH - It is a md5 hash of the sum : (YOUR_TS + YOUR_PUBLIC_KEY + YOUR_PRIVATE_KEY)</li>
    <li>* Just google search md5 generator</li>
    <li>For more info check https://developer.marvel.com/documentation/authorization <li>
<ul>

<p>There you go, you are all set...</p>