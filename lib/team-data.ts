export interface TeamMember {
  id: string
  name: string
  role: string
  department: "Leadership" | "Teaching" | "ICT" | "Support"
  image: string
  shortBio: string
  fullBio: string
  qualifications: string[]
  specialties: string[]
  yearsExperience: number
  quote?: string
  email?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "j-nyambuya",
    name: "Mr. J Nyambuya",
    role: "Co-Founder & Director",
    department: "Leadership",
    image: "/nyambuya.png",
    shortBio: "Visionary co-founder who transformed a dream into reality, providing strategic direction and administrative oversight.",
    fullBio: "Mr. J Nyambuya is the co-founder and Director of Favour Preschool and Daycare Center. His vision of providing quality early childhood education to the Mbundane community drove the establishment of the school in 2021. With a background in business administration and a passion for community development, he oversees the strategic direction, financial management, and growth planning of the institution.\n\nHis leadership philosophy centers on creating sustainable educational solutions that are accessible to working families. Under his direction, Favour Preschool has grown from a small community initiative to a fully registered educational institution serving dozens of families.\n\nMr. Nyambuya is particularly proud of the school's partnership with Kawerify Tech, which has brought ICT education to young learners in Mbundane. He believes that preparing children for a technology-driven future is essential, regardless of their socioeconomic background.",
    qualifications: [
      "Diploma in Business Administration",
      "Certificate in Non-Profit Management",
      "Child Protection Training Certified"
    ],
    specialties: [
      "Strategic Planning",
      "Community Relations",
      "Educational Administration",
      "Partnership Development"
    ],
    yearsExperience: 5,
    quote: "Every child in Mbundane deserves access to quality education. We're building more than a school - we're building futures."
  },
  {
    id: "l-nyambuya",
    name: "Mrs. L Nyambuya",
    role: "Principal & ECD B Teacher",
    department: "Leadership",
    image: "/nyambuya.png",
    shortBio: "Co-founder with 15+ years of experience and a diploma in Early Childhood Education, providing visionary leadership while remaining connected to classroom practice.",
    fullBio: "Mrs. L Nyambuya brings over 15 years of experience in early childhood education to her dual role as Principal and ECD B Teacher. As co-founder of Favour Preschool, she has been instrumental in developing the school's curriculum, establishing teaching standards, and creating a nurturing learning environment.\n\nHer hands-on approach means she maintains a direct connection to classroom practice while overseeing the school's academic programs. This unique perspective ensures that administrative decisions are always grounded in the realities of teaching and learning.\n\nMrs. Nyambuya is particularly passionate about school readiness - ensuring that every child who graduates from Favour Preschool is academically, socially, and emotionally prepared for primary school. Her ECD B class consistently produces confident, curious learners who excel in their next educational phase.\n\nBeyond academics, she emphasizes the importance of character development, teaching children values such as respect, kindness, and responsibility that will serve them throughout their lives.",
    qualifications: [
      "Diploma in Early Childhood Education",
      "Certificate in Educational Leadership",
      "First Aid and CPR Certified",
      "Child Psychology Training"
    ],
    specialties: [
      "Curriculum Development",
      "School Readiness Programs",
      "Parent Communication",
      "Character Education",
      "ECD B Teaching"
    ],
    yearsExperience: 15,
    quote: "Education is not just about filling minds with knowledge - it's about nurturing hearts and building character."
  },
  {
    id: "f-mlambo",
    name: "Mrs. F Mlambo",
    role: "Teacher-in-Charge & Toddler Supervisor",
    department: "Teaching",
    image: "/mlambo.png",
    shortBio: "With Favour since day one, Mrs. Mlambo creates a warm, nurturing environment for our youngest learners with expertise in sensory exploration and language development.",
    fullBio: "Mrs. F Mlambo has been an integral part of Favour Preschool since its inception in 2021. As Teacher-in-Charge and Toddler Supervisor, she is responsible for creating a safe, stimulating environment for children aged 18 months to 3 years - a critical developmental period.\n\nHer approach to early childhood care combines warmth and professionalism. She understands that for many children, Favour Preschool is their first experience away from family, and she works tirelessly to create a home-away-from-home atmosphere where even the youngest learners feel secure and loved.\n\nMrs. Mlambo specializes in sensory exploration activities that support cognitive development, as well as early language development programs that give children a strong foundation for future literacy. She is also skilled in recognizing developmental milestones and identifying children who may need additional support.\n\nAs Teacher-in-Charge, she assists the Principal with day-to-day operations and serves as a mentor to newer staff members, sharing her experience and expertise generously.",
    qualifications: [
      "Certificate in Early Childhood Development",
      "Infant and Toddler Care Certification",
      "First Aid Certified",
      "Child Development Assessment Training"
    ],
    specialties: [
      "Toddler Care",
      "Sensory Development",
      "Early Language Development",
      "Attachment and Bonding",
      "Milestone Monitoring"
    ],
    yearsExperience: 8,
    quote: "The toddler years are magical - every day brings new discoveries, new words, new connections."
  },
  {
    id: "charmaine",
    name: "Miss Charmaine",
    role: "ECD A Teacher",
    department: "Teaching",
    image: "/about.jpg",
    shortBio: "Certified in Early Childhood Development, Miss Charmaine excels in literacy foundation and creative arts, bringing vibrant energy to our foundation phase.",
    fullBio: "Miss Charmaine brings youthful energy and creative enthusiasm to her role as ECD A Teacher, working with children aged 3-4 years. Her classroom is known for its vibrant atmosphere, engaging activities, and the joyful sounds of learning.\n\nWith certification in Early Childhood Development and specialized training in literacy foundation, Miss Charmaine prepares children for the transition from toddlerhood to more structured learning. Her curriculum focuses on building pre-reading and pre-writing skills through play-based activities that make learning feel like adventure.\n\nCreative arts are central to her teaching philosophy. She believes that through art, music, and dramatic play, children develop self-expression, fine motor skills, and cognitive abilities that support all areas of learning. Her classroom walls are always filled with colorful student artwork and creative projects.\n\nMiss Charmaine has a special talent for connecting with shy or hesitant children, helping them come out of their shells and discover the joy of learning. Parents frequently comment on the positive changes they see in their children's confidence and communication skills.",
    qualifications: [
      "Certificate in Early Childhood Development",
      "Literacy Foundation Specialist Training",
      "Creative Arts in Education Workshop",
      "Positive Behavior Management Training"
    ],
    specialties: [
      "Literacy Foundation",
      "Creative Arts",
      "Music and Movement",
      "Social-Emotional Development",
      "Transition Support"
    ],
    yearsExperience: 4,
    quote: "Every child is an artist and a storyteller. My job is to give them the tools and confidence to share their gifts."
  },
  {
    id: "s-sibanda",
    name: "Mrs. S Sibanda",
    role: "Lead ICT Instructor",
    department: "ICT",
    image: "/tonde.png",
    shortBio: "CEO of Kawerify Tech, designing our preschool ICT curriculum to be developmentally appropriate and skill-building.",
    fullBio: "Mrs. S Sibanda is the CEO of Kawerify Tech and Lead ICT Instructor at Favour Preschool. Her partnership with the school has brought technology education to young learners in Mbundane - an innovation that prepares children for an increasingly digital world.\n\nWith extensive experience in both technology and education, Mrs. Sibanda has developed a unique ICT curriculum specifically designed for preschool-age children. Her approach recognizes that technology education at this level must be developmentally appropriate, focusing on basic computer familiarity, mouse and keyboard skills, and educational software rather than complex programming.\n\nHer curriculum emphasizes 'learning by doing' - children engage with age-appropriate games and activities that build digital literacy while supporting overall cognitive development. She carefully balances screen time with other learning activities, ensuring technology enhances rather than replaces traditional early childhood education.\n\nBeyond teaching, Mrs. Sibanda is passionate about bridging the digital divide in Zimbabwe. She believes that introducing children to technology early, regardless of their family's economic circumstances, gives them essential skills for future success.",
    qualifications: [
      "Bachelor's Degree in Information Technology",
      "Certificate in Educational Technology",
      "Child Digital Safety Training",
      "Curriculum Development Workshop"
    ],
    specialties: [
      "ICT Curriculum Design",
      "Educational Technology",
      "Digital Literacy",
      "Age-Appropriate Computing",
      "Child-Friendly Software"
    ],
    yearsExperience: 10,
    quote: "Technology is a tool for empowerment. The earlier children learn to use it wisely, the better prepared they are for tomorrow."
  },
  {
    id: "t-sibanda",
    name: "Mr. T Sibanda",
    role: "ICT Instructor",
    department: "ICT",
    image: "/tonde.png",
    shortBio: "With a patient, systematic teaching style, ensures each child develops practical computer skills through success-oriented activities.",
    fullBio: "Mr. T Sibanda is an ICT Instructor at Favour Preschool, working alongside Mrs. S Sibanda to deliver technology education to young learners. His patient, systematic teaching style makes him particularly effective with children who are encountering computers for the first time.\n\nMr. Sibanda's approach focuses on building confidence through success. He breaks down computer skills into small, achievable steps, celebrating each child's progress and encouraging them to take on new challenges at their own pace. This methodology ensures that no child feels overwhelmed or left behind.\n\nHe is skilled at recognizing different learning styles and adapting his teaching accordingly. Some children learn best through visual demonstration, others through hands-on practice, and Mr. Sibanda seamlessly adjusts his approach to meet each child's needs.\n\nBeyond technical skills, he emphasizes digital citizenship - teaching children about online safety, responsible technology use, and the importance of balancing screen time with other activities. These lessons provide a foundation for healthy technology habits that will serve children throughout their lives.",
    qualifications: [
      "Diploma in Information Technology",
      "Certificate in Teaching Methodology",
      "Child Safety and Protection Training",
      "Educational Software Specialist"
    ],
    specialties: [
      "Patient Instruction",
      "Basic Computer Skills",
      "Digital Citizenship",
      "Learning Style Adaptation",
      "Confidence Building"
    ],
    yearsExperience: 6,
    quote: "Every child can master technology - they just need the right pace, the right encouragement, and lots of patience."
  },
  {
    id: "assistant-teacher",
    name: "Miss Tendai",
    role: "Teaching Assistant",
    department: "Support",
    image: "/toddler.png",
    shortBio: "A dedicated support staff member who assists across all classrooms, ensuring every child receives individual attention.",
    fullBio: "Miss Tendai serves as Teaching Assistant at Favour Preschool, providing invaluable support across all classrooms. Her flexibility and dedication ensure that every child receives the individual attention they need, particularly during high-activity periods and transitions.\n\nWorking closely with all teachers, Miss Tendai assists with classroom setup, activity preparation, and supervision during outdoor play. She has developed strong bonds with students across all age groups and often serves as a familiar, comforting presence for children moving between activities or adjusting to new routines.\n\nHer warm, patient demeanor makes her particularly effective in supporting children with additional needs or those going through difficult transitions, such as starting school for the first time or adjusting to changes at home.\n\nMiss Tendai is currently pursuing further qualifications in Early Childhood Development, with the goal of becoming a lead teacher. Her growth journey exemplifies the school's commitment to staff development and internal promotion.",
    qualifications: [
      "Certificate in Child Care",
      "First Aid Certified",
      "Currently pursuing ECD Diploma"
    ],
    specialties: [
      "Classroom Support",
      "Individual Attention",
      "Transition Support",
      "Activity Preparation",
      "Student Comfort"
    ],
    yearsExperience: 2,
    quote: "Being there for the children in the small moments - that's where the real connection happens."
  }
]

export function getTeamMember(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id)
}

export function getTeamByDepartment(department: TeamMember["department"]): TeamMember[] {
  return teamMembers.filter(member => member.department === department)
}
