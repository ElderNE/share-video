$\textcolor{red}{Any\ copy\ for\ commercial\ use\ is\ strictly\ prohibited!}$

## Demo Next.Js project


Live demo [https://learnwell-seven.vercel.app](https://learnwell-seven.vercel.app/collections/eldar_nuretdinov).

The project is the frontend part of a video hosting app. The app displays videos from selected users, but only logged-in users can add, edit, and comment on videos. Logged-in users are managed by server-side logic, now implemented in page.tsx within the app router. Authorization logic will be implemented if necessary.

Easy to use. Enter a name on the first page and you will be redirected to the video list page. Scroll through the video list and choose an interesting video. The main video has a description for information. Videos in the video list have titles and IDs for easy access to editing information about the video (use the video ID). 

You can add videos (links to an external server with an MP4 video) and edit video titles and descriptions. YouTube videos are not supported; only MP4 file hosting is allowed. Comments can also be made for each video.

YouTube videos are not supported. Only MP4 file hosting is allowed.

![Desktop screen.](/public/assets/images/readme/comments_closed.jpg)

![Desktop screen.](/public/assets/images/readme/comments_opened.jpg)

![Mobile screen.](/public/assets/images/readme/mobile.jpg)

![Mobile screen.](/public/assets/images/readme/mobile1.jpg)


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

