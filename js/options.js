$(function() {
  chrome.storage.sync.get(
    ["badgeColor", "badgeText", "watermarkText"],
    function(data) {
      const { badgeColor, badgeText, watermarkText } = data;
      console.log(badgeColor, badgeText);
      $(".on-text").val(badgeText.on)
      $(".off-text").val(badgeText.off)
      $(".on-bg").val(badgeColor.on)
      $(".off-bg").val(badgeColor.off)
      $(".watermark-text").val(watermarkText)
    }
  )

  $(".set-badge-text").on("click", function() {
    chrome.storage.sync.set({
      badgeText: {
        on: $(".on-text").val(),
        off: $(".off-text").val()
      }
    })
    alert("更新成功")
  })
  
  $(".set-badge-bg").on("click", function() {
    chrome.storage.sync.set({
      badgeColor: {
        on: $(".on-bg").val(),
        off: $(".off-bg").val()
      }
    })
    alert("更新成功")
  })
  $(".set-watermark").on("click", function() {
    chrome.storage.sync.set({
      watermarkText: $(".watermark-text").val()
    })
    alert("更新成功")
  })
})