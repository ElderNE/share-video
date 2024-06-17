Any copy for commercial use is strictly prohibited.


## Demo Next.Js project


Live demo [https://learnwell-seven.vercel.app](https://learnwell-seven.vercel.app).

Enter a name on the first page to go to the video page. The app displays videos from interested users, but only logged-in users can add, edit, and comment on videos. Logged-in users are managed by server-side logic, now implemented in page.tsx within the app router.

YouTube videos are not supported. Only MP4 file hosting is allowed.


## Getting Started


The complete project is located in the collections folder. Tailwing Config file: added custom colors and screens settings.

Add to global.css to fix cross-browser issues.
```sh
".backdropFilter {
   -webkit-backdrop-filter: blur(5px);
}"
```


Dependencies:

  @radix-ui/

  lucide-react

  tailwindcss


1.Install dependencies:

```bash
npm i
```

2.Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Incoming data


All incoming data is checked and validated, and has XSS and overflow protection. The textProtection utility has settings for the maximum incoming text length.



### Fields with incoming data


All text fields with incoming data has fixed size and "overflow: hidden" attributes. Adding pagination and increasing the number of displayed characters after expanding the backend capabilities.
Users can't add any videos from YouTube. Links are validated with the 'youto' pattern.

