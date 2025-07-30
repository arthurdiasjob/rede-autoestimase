import MediaSection from "../../components/MediaSection";

export default function TestMediaPage() {
  return (
    <div
      style={{
        backgroundColor: "#3B413F",
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <h1
          style={{ color: "white", textAlign: "center", marginBottom: "3rem" }}
        >
          Teste do Componente MediaSection com API
        </h1>
        <MediaSection />
      </div>
    </div>
  );
}
