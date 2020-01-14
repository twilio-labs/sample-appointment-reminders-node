$(document).ready(function() {
  $('#inputDate').datetimepicker({
    sideBySide: true,
    format: 'YYYY-MM-DD hh:mma',
  });
  $('#selectTimeZone').chosen();
});
