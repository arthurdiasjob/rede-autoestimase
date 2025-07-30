# 📌 Component: SplitView  

The **SplitView** component displays an image alongside a title and text.  

## 📱 Responsive Behavior  
- **Desktop:** The image is displayed on the left, and text elements on the right (by default).  
- **Mobile:** The layout adjusts to a column order:  
  **Title → Image → Text**.  

## 🛠 Available Props  
| Prop       | Type    | Default  | Description |
|------------|--------|--------|------------|
| `icon`     | `ReactNode` | - | Optional icon displayed alongside the title. The default color is **#945a9a**, following the brand style. |
| `title`    | `string` | **Required** | The main title text. |
| `text`     | `string` | **Required** | The descriptive text below the title. |
| `image`    | `string` \| `StaticImport` | **Required** | The image URL (`string`) or a **Static Import** (`import img from "@/assets/img.png"`). |
| `alt`      | `string` | **Required** | Alternative text for the image. |
| `reverse`  | `boolean` | `false` | If `true`, swaps the order, positioning the image on the right. |

## 🎨 Styling  
- The **SplitView** has a **transparent** background, and its text colors follow the `body` styles.  
- To customize the **background, title, and text colors**, wrap the component in a `div` and set the desired styles via `background-color`, `h3`, and `p`.  
- **⚠️ Important:** Do not modify these styles directly in the component, as it may cause unintended effects on other pages.  

---

### 🖥 Example Usage  

```tsx
import SplitView from "@/components/SplitView";
import ExampleImage from "@/assets/example.png";

export default function Example() {
  return (
    <SplitView
      icon={<SomeIcon />}
      title="My Title"
      text="This is an example usage of the SplitView component."
      image={ExampleImage}
      alt="Image description"
      reverse={true}
    />
  );
}
