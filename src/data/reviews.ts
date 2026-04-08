export interface Review {
  name: string
  role: string
  text: string
  rating: number
}

export const primaryReviews: Review[] = [
  {
    name: 'Ashish Bhardwaj',
    role: 'Parent — Junior Cert, Leaving Cert & Primary School',
    text: 'I am pleased to recommend Dr Monika Gandhi who has been an exceptional tutor for my 2 daughters in Science, Biology (Leaving Cert) and Hindi, Maths, Science for primary school. From the beginning, Monika demonstrated outstanding dedication, professionalism, and a deep understanding of the subject matter. Her ability to explain complex topics in a clear, patient, and engaging manner made a noticeable impact on my child\'s academic progress and confidence. Beyond academic excellence, Monika also showed genuine care for my child\'s growth, adapting her methods based on learning style and feedback.',
    rating: 5,
  },
  {
    name: 'Amit',
    role: 'Parent — Primary School',
    text: 'Monika explains technical things starting from basics which helps the kids understand them better. She is very methodical and disciplined with her schedule. Will certainly recommend!',
    rating: 5,
  },
  {
    name: 'Tyagi',
    role: 'Parent — Primary School Maths',
    text: "We've been so impressed with Monika as our daughter's maths tutor. Since starting grinds, my daughter's understanding and confidence have grown hugely. Monika has a clear, patient teaching style and really takes the time to make sure she grasps each topic. My daughter's results and attitude toward maths have improved noticeably. We're very grateful for the support and highly recommend her!",
    rating: 5,
  },
]

export const juniorCycleReviews: Review[] = [
  {
    name: 'Ashish Bhardwaj',
    role: 'Parent — Junior Cert, Leaving Cert & Primary School',
    text: 'Monika demonstrated outstanding dedication, professionalism, and a deep understanding of the subject matter. Her ability to explain complex topics in a clear, patient, and engaging manner made a noticeable impact on my child\'s academic progress and confidence. Good notes and PowerPoint slides, and on time with adjustable timings if required. Her positive attitude and encouraging approach made learning enjoyable and effective. A true asset to any student\'s academic journey.',
    rating: 5,
  },
  {
    name: 'Neha',
    role: 'Parent — Junior Cycle',
    text: 'My son Vinay enjoys learning from Monika. He feels comfortable asking her questions, and he is making significant progress. Monika is a patient and encouraging teacher who explains concepts clearly and possesses excellent subject knowledge.',
    rating: 5,
  },
  {
    name: 'Namita Kapoor',
    role: 'Parent — Junior Cycle Maths',
    text: "We are incredibly grateful for Monika's dedication and expertise in teaching Maths. Her clear explanations, patience, and engaging approach have made a huge difference in my daughter Riya's confidence and understanding. We've seen remarkable progress, and Maths has become a subject she actually enjoys! Highly recommend to any parent looking for quality Grinds.",
    rating: 5,
  },
  {
    name: 'Vivek',
    role: 'Parent — Junior Cycle Maths',
    text: "Monika is an amazing maths teacher! Our child feels comfortable asking questions and learning new things in her class. Her way of teaching has helped our child get better at maths. We would highly recommend!",
    rating: 5,
  },
  {
    name: 'Rahul',
    role: 'Parent — Junior Cycle Science & Maths',
    text: "Monika is an exceptional teacher for my daughter. She has an incredible ability to connect with her students, creating a supportive and nurturing environment where my daughter feels confident to ask questions and express herself. Monika is not only knowledgeable and skilled in the subject matter, but she also has a unique way of making the material engaging and understandable. I recommend her for all aspiring students in Science and Maths.",
    rating: 5,
  },
  {
    name: 'Parent of Antoni & Filip',
    role: 'Veronica — Junior Cycle Maths',
    text: '',
    rating: 5,
  },
]

export const leavingCertReviews: Review[] = [
  {
    name: 'Linda',
    role: 'Parent — Leaving Cert Chemistry & Maths',
    text: 'I highly recommend Monika as an exceptional chemistry and mathematics tutor. She is incredibly dedicated, patient, and skilled at breaking down complex concepts in a way that makes learning both effective and enjoyable. Monika consistently tailors her approach to fit each student\'s individual needs and is very mindful of their availability, making her a flexible and reliable support for their academic success. Her passion for teaching and deep understanding of the subject truly make her stand out.',
    rating: 5,
  },
  {
    name: 'Sudha & Abhinav',
    role: 'Parent & Student — Leaving Cert Chemistry',
    text: "My son Abhinav picked up chemistry only in Leaving Cert. A huge thanks to Monika for bringing my son in line with his class really fast — it was easy for him to take it from there. Update: \"I got my Leaving Cert results and I got a H1 in Chemistry! Thank you very much for your help, I couldn't have achieved this without you.\" — Abhinav",
    rating: 5,
  },
  {
    name: 'Sapna',
    role: 'Parent — Leaving Cert Chemistry',
    text: 'Monika has taught my son Chemistry for the Leaving Cert. Very skilled tutor.',
    rating: 5,
  },
  {
    name: 'Parent',
    role: 'Parent — Leaving Cert Biology',
    text: "With your guidance, our daughter has developed into a confident and capable child. Thank you for being such an important part in our child's development. Teaching Biology for Leaving Cert with good knowledge and explanation, same like your own daughter. I would recommend your classes for Biology for Leaving Cert.",
    rating: 5,
  },
  {
    name: 'Ashish Bhardwaj',
    role: 'Parent — Junior Cert, Leaving Cert & Primary School',
    text: 'Monika demonstrated outstanding dedication, professionalism, and a deep understanding of the subject matter. Her ability to explain complex topics in a clear, patient, and engaging manner made a noticeable impact on my child\'s academic progress and confidence. Her positive attitude and encouraging approach made learning enjoyable and effective. I wholeheartedly recommend Monika to anyone seeking a knowledgeable, reliable, and inspiring tutor.',
    rating: 5,
  },
]

export const ibReviews: Review[] = [
  {
    name: 'Nidhi',
    role: 'Parent — IB Maths & Biology',
    text: "Took classes for my kids from Monika for Maths and Biology. She is very thorough with her topics and deals patiently with kids ensuring they understand all concepts. She also helps with good notes and techniques like mind maps which helps in remembering the subjects. I highly recommend her.",
    rating: 5,
  },
  {
    name: 'Indrani',
    role: 'Parent of Isha — IB Biology, Singapore',
    text: '',
    rating: 5,
  },
]

// Mixed selection for Home page and Counselling
export const featuredReviews: Review[] = [
  primaryReviews[2],   // Tyagi
  juniorCycleReviews[2], // Namita Kapoor
  leavingCertReviews[0], // Linda
  leavingCertReviews[1], // Sudha & Abhinav
]
