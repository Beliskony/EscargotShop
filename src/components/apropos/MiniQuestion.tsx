import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const MiniQuestion = () => {
  return (
    <section>
        <Accordion type="single" collapsible className="w-full text-[#1E0F1C]">
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>
  )
}

export default MiniQuestion