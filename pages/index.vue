<template>
  <div>test</div>
</template>

<script>
import { db } from "@/plugins/firebase";
const citiesRef = db.collection("cities");

export default {
  asyncData() {
    citiesRef
      .where("date", ">", new Date())
      .get()
      .then(() => {
        console.log("ok");
      });

    // citiesRef
    //   .add({
    //     name: "Tokyo"
    //   })
    //   .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    //   });

    return {};
  }
};
</script>