# Quick Guide to Vue.js Development

This guide provides a quick overview of the main commands, principles, and tips for developing applications with Vue.js.

---

## **1. Core Principles**

### **Components**
- Vue.js apps are built using **components**.
- Each component consists of:
  - **Template**: HTML for the view.
  - **Script**: JavaScript/TypeScript for logic and data.
  - **Style**: CSS for styling (scoped or global).

### **Reactive Data Binding**
- Vue uses a **reactive data model** to automatically update the DOM when data changes.
- **Interpolation**: `{{ data }}` (Display data in the template).
- **Directives**:
  - `v-bind`: Bind data to an element attribute (e.g., `v-bind:href="url"` or `:href="url"`).
  - `v-model`: Two-way data binding for form inputs.
  - `v-if`, `v-else`, `v-show`: Conditional rendering.
  - `v-for`: Render lists (e.g., `v-for="item in items"`).

### **Composition API (Vue 3)**
- Use the **Composition API** (`setup` function) for better organization and reusability of logic.
- Example:
  ```javascript
  import { ref, computed } from 'vue';

  export default {
    setup() {
      const count = ref(0);
      const doubleCount = computed(() => count.value * 2);
      return { count, doubleCount };
    },
  };
  ```

### **State Management**
- For shared state, use **Vuex** (Vue 2) or **Pinia** (Vue 3).
- Pinia is the recommended state management library for Vue 3.

### **Routing**
- Use **Vue Router** for navigation and dynamic route matching.
- Example:
  ```javascript
  const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ];
  ```

---

## **2. Main Commands**

### **Vue CLI**
- Install Vue CLI globally:
  ```bash
  npm install -g @vue/cli
  ```
- Create a new project:
  ```bash
  vue create project-name
  ```
- Serve the application:
  ```bash
  npm run serve
  ```
- Build the project for production:
  ```bash
  npm run build
  ```
- Run unit tests:
  ```bash
  npm run test:unit
  ```
- Run end-to-end tests:
  ```bash
  npm run test:e2e
  ```

### **Vite (Vue 3)**
- For faster development, use **Vite**:
  ```bash
  npm create vite@latest project-name --template vue
  cd project-name
  npm install
  npm run dev
  ```

---

## **3. Tips for Development**

### **Organize Your Code**
- Use **Single-File Components (SFCs)** (`.vue` files) to keep template, script, and styles together.
- Group related components into folders (e.g., `components/`, `views/`).

### **Use Composables**
- In Vue 3, create reusable logic with **composables** (similar to React hooks).
- Example:
  ```javascript
  // useCounter.js
  import { ref } from 'vue';

  export function useCounter() {
    const count = ref(0);
    function increment() {
      count.value++;
    }
    return { count, increment };
  }
  ```

### **Optimize Performance**
- Use `v-once` for static content to avoid re-rendering.
- Use `v-memo` (Vue 3) to memoize parts of the template.
- Lazy-load components with `defineAsyncComponent`.

### **Testing**
- Write unit tests with **Jest** or **Vitest**.
- Use **Cypress** or **Playwright** for end-to-end testing.

### **Debugging**
- Use **Vue Devtools** (browser extension) for debugging and inspecting components, state, and events.

### **Stay Updated**
- Vue 3 introduces many new features (e.g., Composition API, Teleport, Suspense). Keep your project updated.

---

## **4. Common Pitfalls**

- **Reactivity Caveats**: Vue cannot detect property addition or deletion in objects. Use `Vue.set` or `Vue.delete` (Vue 2) or `ref`/`reactive` (Vue 3).
- **Memory Leaks**: Clean up event listeners and timers in the `beforeUnmount` lifecycle hook.
- **Overusing Watchers**: Prefer computed properties over watchers for derived state.

---

## **5. Useful Resources**

- [Vue.js Documentation](https://vuejs.org/guide/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue School](https://vueschool.io/) (Tutorials and Courses)
- [Vue Mastery](https://www.vuemastery.com/) (Advanced Vue.js Training)

---

This guide covers the essentials to get started with Vue.js development. Happy coding! 🚀