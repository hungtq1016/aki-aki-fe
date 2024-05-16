import { defineStore } from "pinia";
import { socket } from "@/core/services/hooks/useSocket";
import { ref } from "vue";

export const useSocketStore = defineStore("socket",()=> {
  
  const items:any = ref([])

  function bindEvents() {
    // sync the list of items upon connection
    socket.on("connect", () => {
      socket.emit("item:list", (res:any) => {
        items.value = res.data;
      });
    });

    // update the store when an item was created
    socket.on("item:created", (item:any) => {
      items.value.push(item);
    });
  }

  function createItem(label:any) {
    const item = {
      id: Date.now(), // temporary ID for v-for key
      label
    };
    items.value.push(item);

    socket.emit("item:create", { label }, (res:any) => {
      item.id = res.data;
    });
  }

  return {items, bindEvents, createItem}
});