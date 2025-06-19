// priority: 90


// Items, welche folgenden Tag erhalten, werden aus den Rezepten removt.
// Weitere Implementierung, aus der Iteminitalisierung entfernen, durch StartupEvents? kann zu Konflikten mit Rezepten führen.

let remove_item_by_tag = (event) => {
  event.remove({output: "#remove:items"})
}