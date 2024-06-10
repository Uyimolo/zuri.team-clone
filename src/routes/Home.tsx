import LandingHero from "../components/homepage/LandingHero"
import S2TechInclusive from "../components/homepage/S2TechInclusive"
import S3EnablingAfricans from "../components/homepage/S3EnablingAfricans"
import S4DownloadImpact from "../components/homepage/S4DownloadImpact"
import S5TrainingOptions from "../components/homepage/S5TrainingOptions"
import S6ExperiencedProfessionals from "../components/homepage/S6ExperiencedProfessionals"

const Home = () => {
  return (
    <main className="">
      <LandingHero />
      <S2TechInclusive />
      <S3EnablingAfricans />
      <S4DownloadImpact />
      <S5TrainingOptions />
      <S6ExperiencedProfessionals />
    </main>
  )
}

export default Home
