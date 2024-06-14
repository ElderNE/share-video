## Demo Next.Js project


Live demo [learnwell-seven.vercel.app](learnwell-seven.vercel.app).

Enter a name to go to the video list page.


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


All incoming data checked and validated.


### Fields with incoming data


All text fields with incoming data has fixed size and "overflow: hidden" attributes. Adding pagination and increasing the number of displayed characters after expanding the backend capabilities.

