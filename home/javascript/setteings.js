function saveData() {
  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const gender = document.getElementById('gender').value
  const dob = document.getElementById('dob').value

  // Validate phone
  const phoneRegex = /^05\d{8}$/
  if (!phoneRegex.test(phone)) {
    alert('رقم الهاتف يجب أن يبدأ بـ "05" ويتبعه 8 أرقام.')
    return false
  }

  // Validate dob is not in the future
  const dobDate = new Date(dob)
  const today = new Date()
  if (dobDate > today) {
    alert('تاريخ الميلاد لا يمكن أن يكون في المستقبل.')
    return false
  }

  // Validate dob is not more than 105 years ago
  const maxDob = new Date()
  maxDob.setFullYear(maxDob.getFullYear() - 105)
  if (dobDate < maxDob) {
    alert('تاريخ الميلاد يجب ألا يكون قبل 105 سنوات من الآن.')
    return false
  }

  localStorage.setItem('name', name)
  localStorage.setItem('phone', phone)
  localStorage.setItem('gender', gender)
  localStorage.setItem('dob', dob)

  alert('تم حفظ البيانات بنجاح!')
  return false // Prevent form submission
}

function loadStoredData() {
  document.getElementById('name').value = localStorage.getItem('name') || ''
  document.getElementById('phone').value = localStorage.getItem('phone') || ''
  document.getElementById('gender').value = localStorage.getItem('gender') || ''
  document.getElementById('dob').value = localStorage.getItem('dob') || ''
}

window.onload = loadStoredData
