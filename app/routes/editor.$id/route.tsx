import { LoaderFunction } from "@remix-run/node";
import SegmentList from "./components/SegmentList";

export const loader: LoaderFunction = async ({ request, params }) => {
 const translationData = [
     {
       id: "segment-1",
     original:
       "I am passionate about contributing to an environment that values diverse voices and perspectives, and I believe my experiences will enrich the collaborative and dynamic culture",
     mainTranslation: 
       "ང་ནི་སྣ་མང་གི་བསམ་ཚུལ་དང་ལྟ་ཚུལ་ལ་རིན་ཐང་འཇོག་པའི་ཁོར་ཡུག་ཅིག་ལ་ཞབས་འདེགས་ཞུ་བར་དགའ་ཞེན་ཆེན་པོ་ཡོད་ལ།",
     suggestions: [
       {
         text: "ང་ནི་སྣ་མང་རང་བཞིན་དང་ལྟ་ཚུལ་མི་འདྲ་བ་མངོན་པའི་ཁོར་ཡུག་ལ་ཞབས་འདེགས་སྒྲུབ་མཁན་གྱི་མི་ཞིག་ཡིན།",
         source: "Mirta MT",
         language: "Tibetan (BODH)",
         confidence: "90%",
       },
       {
         text: "ང་ནི་སྣ་མང་རང་བཞིན་དང་ལྟ་ཚུལ་མི་འདྲ་བ་མངོན་པའི་ཁོར་ཡུག་ལ་ཞབས་འདེགས་སྒྲུབ་མཁན་གྱི་མི་ཞིག་ཡིན།",
         source: "Pubic TM",
         language: "Tibetan (BODH)",
         confidence: "50%",
       },
     ],
   },
     {
         id: "segment-2",
     original:
       "I strive to create meaningful relationships and foster collaboration across diverse teams to achieve shared goals.",
     mainTranslation: 
       "ང་ནི་སྤྲོས་གཉེར་བར་འགྱུར་དུ་རབ་བཟུང་སྤྱོད་ལ་དོ་སྣང་ཆེ་ཤོས་ཡོད།",
     suggestions: [
       {
         text: "ང་ནི་རྒྱབ་འབུབ་དང་ལྷན་གྲོས་དང་ལྷག་ཏུ་སྤྱོད་མཁན་ཡིན།",
         source: "Mirta MT",
         language: "Tibetan (BODH)",
         confidence: "85%",
       },
       {
         text: "ང་ནི་འཕེལ་རྩལ་དང་གྲོས་གཅིག་སྤྱོད་མཁན་ཡིན།",
         source: "Pubic TM",
         language: "Tibetan (BODH)",
         confidence: "60%",
       },
     ],
   },
 ];

    const docxId = params.id;
    return { translationData };
};
export default function route() {
    return <div className="px-10 w-full">
        <SegmentList/>
    </div>;
}
