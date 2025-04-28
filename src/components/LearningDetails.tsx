import { useParams } from "react-router-dom";
import { additionalLearningData } from "../data/additionalLearning";

function LearningDetails() {
  const { id } = useParams<{ id: string }>();
  const learningSource = additionalLearningData
    .flatMap((source) => source.topics)
    .find((topic) => topic.id === id);

  if (!learningSource) {
    return <div>Learning Topic not found.</div>;
  }

  return (
    <section className="learning-details-container">
      <h2>{learningSource.name}</h2>
      <p>{learningSource.shortDescription}</p>
      {/* You can add more detailed content about the topic here */}
    </section>
  );
}

export default LearningDetails;
