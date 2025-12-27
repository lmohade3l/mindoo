import Header from "@/components/layout/Header";
import HomeContent from "@/components/layout/HomeContent";
import { PageLoading } from "@/components/ui/PageLoading";
import Image from "next/image";

export default function Home() {
  return (
    <PageLoading backgroundColor="#FBD302">
      <Header />
      <HomeContent />
    </PageLoading>
  );
}
