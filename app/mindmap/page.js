
import Container from "@/app/_components/Container/Container";
import Mindmap from "@/app/_components/Mindmap/Mindmap";
import MindmapImages from "@/app/_components/Mindmap/MindmapImages";

export const metadata = {
  title: "FMindmap",
};

export default function Page () {
    return (
        <div>
            <Container>
                <Mindmap />
                <MindmapImages />
            </Container>
        </div>
    )
}