import Categories from "@/components/Categories/Categories";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories
        title="Popular This Week"
        description="A quick look at trending bestseller lists — tap any category to see the books inside."
        buttonText="Visit Shop"
        buttonHref="/shop"
        limit={6}
      />
    </div>
  );
}
