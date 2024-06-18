import type { Metadata } from "next";

import Collections from "@/components/collections";

export async function generateMetadata({ 
  params 
}: {
  params: { id: string }
}, ): Promise<Metadata> {

  //Change format for best practive title
  const newTitle = params.id[0].toUpperCase() + params.id.slice(1) + "'s videos";

  return {
    title: newTitle,
    description: `All videos from user ${params.id}`
  }
}

export default function Page({ 
  params 
}: { 
  params: { id: string } 
}) {
  return (
    <>
      {params.id.length>0 && <Collections id={params.id} 
                                          user="Newuser"/>}
    </>
  )
}