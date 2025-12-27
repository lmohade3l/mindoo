import Header from "@/components/Header";
import HomeContent from "@/components/HomeContent";
import { PageLoading } from "@/components/PageLoading";
import Image from "next/image";

export default function Home() {
  return (
    <PageLoading backgroundColor="#FBD302">
      <Header />
      <HomeContent />
    </PageLoading>
  );
}
