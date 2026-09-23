(function () {
  'use strict';

var toastEl = document.getElementById('dashboardToast');
  var toastMsgEl = document.getElementById('toastMessage');
  var toastTimer = null;

  function showToast(message, duration) {
    if (!toastEl || !toastMsgEl) return;
    duration = duration || 3500;

    toastMsgEl.textContent = message;
    toastEl.classList.add('show');

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, duration);
  }

var navLinks = document.querySelectorAll('.sidebar-nav .nav-link, .dropdown-link[data-tab]');
  var sections = document.querySelectorAll('.dashboard-section');

  window.switchDashboardTab = function (tabName) {
    if (!tabName) return;

navLinks.forEach(function (link) {
      if (link.getAttribute('data-tab') === tabName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

var matchedSection = null;
    sections.forEach(function (sec) {
      if (sec.getAttribute('data-section-name') === tabName) {
        sec.classList.add('active');
        matchedSection = sec;
      } else {
        sec.classList.remove('active');
      }
    });

if (history.pushState) {
      history.pushState(null, null, '#' + tabName);
    } else {
      location.hash = '#' + tabName;
    }

window.scrollTo({ top: 0, behavior: 'smooth' });

closeMobileSidebar();
  };

navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var tab = this.getAttribute('data-tab');
      if (tab) {
        e.preventDefault();
        switchDashboardTab(tab);
      }
    });
  });

function initHashTab() {
    var hash = window.location.hash.replace('#', '');
    var validTabs = ['overview', 'assessments', 'scheduled-jobs', 'health-reports', 'before-after', 'invoices', 'messages', 'notifications', 'profile'];
    if (hash && validTabs.indexOf(hash) !== -1) {
      switchDashboardTab(hash);
    }
  }

var sidebar = document.getElementById('dashboardSidebar');
  var sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
  var sidebarBackdrop = document.getElementById('sidebarBackdrop');

  function openMobileSidebar() {
    if (sidebar) sidebar.classList.add('drawer-open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('active');
  }

  function closeMobileSidebar() {
    if (sidebar) sidebar.classList.remove('drawer-open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
  }

  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', function () {
      if (sidebar && sidebar.classList.contains('drawer-open')) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    });
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeMobileSidebar);
  }

var notifBtn = document.getElementById('notificationBtn');
  var notifPopover = document.getElementById('notificationsPopover');
  var bellBadge = document.getElementById('bellBadge');
  var clearNotifBtn = document.getElementById('clearNotificationsBtn');

  var profileBtn = document.getElementById('profilePillBtn');
  var profileMenu = document.getElementById('profileDropdownMenu');

  if (notifBtn && notifPopover) {
    notifBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isExpanded = notifPopover.classList.toggle('active');
      notifBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      if (profileMenu) profileMenu.classList.remove('active');
    });
  }

  if (clearNotifBtn) {
    clearNotifBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (bellBadge) {
        bellBadge.style.display = 'none';
      }
      var unreadItems = document.querySelectorAll('.popover-item.unread');
      unreadItems.forEach(function (item) {
        item.classList.remove('unread');
      });
      showToast('All estate notifications marked as read.');
    });
  }

  if (profileBtn && profileMenu) {
    profileBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isExpanded = profileMenu.classList.toggle('active');
      profileBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      if (notifPopover) notifPopover.classList.remove('active');
    });
  }

document.addEventListener('click', function (e) {
    if (notifPopover && !notifPopover.contains(e.target) && e.target !== notifBtn) {
      notifPopover.classList.remove('active');
      if (notifBtn) notifBtn.setAttribute('aria-expanded', 'false');
    }
    if (profileMenu && !profileMenu.contains(e.target) && e.target !== profileBtn) {
      profileMenu.classList.remove('active');
      if (profileBtn) profileBtn.setAttribute('aria-expanded', 'false');
    }
  });

var assessmentModal = document.getElementById('assessmentModal');
  var openAssessmentBtns = document.querySelectorAll('.open-assessment-modal');
  var closeAssessmentModalBtn = document.getElementById('closeAssessmentModalBtn');
  var cancelAssessmentModalBtn = document.getElementById('cancelAssessmentModalBtn');
  var modalAssessmentForm = document.getElementById('modalAssessmentForm');
  var quickAssessmentForm = document.getElementById('quickAssessmentForm');
  var assessmentHistoryBody = document.getElementById('assessmentHistoryBody');

  function openAssessmentModal() {
    if (assessmentModal) {
      assessmentModal.classList.add('active');
      assessmentModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAssessmentModal() {
    if (assessmentModal) {
      assessmentModal.classList.remove('active');
      assessmentModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openAssessmentBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openAssessmentModal();
    });
  });

  if (closeAssessmentModalBtn) closeAssessmentModalBtn.addEventListener('click', closeAssessmentModal);
  if (cancelAssessmentModalBtn) cancelAssessmentModalBtn.addEventListener('click', closeAssessmentModal);

  if (assessmentModal) {
    assessmentModal.addEventListener('click', function (e) {
      if (e.target === assessmentModal) {
        closeAssessmentModal();
      }
    });
  }

function addAssessmentToHistory(specimen, service, date, priority) {
    if (!assessmentHistoryBody) return;
    var randomId = '#REQ-' + (Math.floor(Math.random() * 800) + 9100);

    var tr = document.createElement('tr');
    tr.style.backgroundColor = 'rgba(229, 195, 136, 0.12)';

    tr.innerHTML =
      '<td><strong>' + randomId + '</strong></td>' +
      '<td>' + specimen + '</td>' +
      '<td>' + service + '</td>' +
      '<td>' + date + '</td>' +
      '<td><span class="badge-priority-high">' + priority + '</span></td>' +
      '<td><span class="status-badge status-scheduled">Dispatched • Pending Arborist</span></td>';

    assessmentHistoryBody.insertBefore(tr, assessmentHistoryBody.firstChild);

    setTimeout(function () {
      tr.style.transition = 'background-color 1s ease';
      tr.style.backgroundColor = '';
    }, 2000);
  }

if (modalAssessmentForm) {
    modalAssessmentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var specimen = document.getElementById('modalTreeSelect').value;
      var service = document.getElementById('modalServiceFocus').value;
      var dateVal = document.getElementById('modalDateInput').value || 'Apr 16, 2026';

      addAssessmentToHistory(specimen, service, dateVal, 'Confirmed Request');
      closeAssessmentModal();
      modalAssessmentForm.reset();

      showToast('Tree assessment scheduled! Senior arborist dispatched for ' + dateVal + '.');
    });
  }

if (quickAssessmentForm) {
    quickAssessmentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var specimen = document.getElementById('treeSelectInput').value;
      var service = document.getElementById('serviceTypeInput').value;
      var dateVal = document.getElementById('preferredDateInput').value || '2026-04-15';
      var priority = document.getElementById('priorityInput').value;

      addAssessmentToHistory(specimen, service, dateVal, priority);
      quickAssessmentForm.reset();

      showToast('Assessment request submitted! Reference logged in history.');
    });
  }

var jobFilterBtns = document.querySelectorAll('.filter-pill[data-filter]');
  var jobCards = document.querySelectorAll('.job-detail-card[data-category]');

  jobFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      jobFilterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');

      jobCards.forEach(function (card) {
        var cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

var viewJobDetailBtns = document.querySelectorAll('.view-job-detail-btn');
  viewJobDetailBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var jobId = this.getAttribute('data-job') || '91';
      showToast('Opening arborist work log & telemetry for Job #ARV-2026-0' + jobId + '...');
    });
  });

var contactBtns = document.querySelectorAll('.contact-arborist-btn');
  contactBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      showToast('Connecting to Lead Arborist secure radio dispatch...');
    });
  });

var galleryCatBtns = document.querySelectorAll('.cat-pill[data-gallery-cat]');
  var galleryCards = document.querySelectorAll('.gallery-item-card[data-gallery-type]');

  galleryCatBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      galleryCatBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      var cat = this.getAttribute('data-gallery-cat');

      galleryCards.forEach(function (card) {
        var cardType = card.getAttribute('data-gallery-type');
        if (cat === 'all' || cardType === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

var payInvoiceModal = document.getElementById('payInvoiceModal');
  var payBtn104 = document.getElementById('payInvoiceBtn104');
  var closePayModalBtn = document.getElementById('closePayModalBtn');
  var cancelPayModalBtn = document.getElementById('cancelPayModalBtn');
  var payInvoiceForm = document.getElementById('payInvoiceForm');
  var invoiceStatus104 = document.getElementById('invoiceStatus104');
  var pendingAmount = document.getElementById('pendingAmount');

  function openPayModal() {
    if (payInvoiceModal) {
      payInvoiceModal.classList.add('active');
      payInvoiceModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closePayModal() {
    if (payInvoiceModal) {
      payInvoiceModal.classList.remove('active');
      payInvoiceModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (payBtn104) {
    payBtn104.addEventListener('click', function () {
      openPayModal();
    });
  }

  if (closePayModalBtn) closePayModalBtn.addEventListener('click', closePayModal);
  if (cancelPayModalBtn) cancelPayModalBtn.addEventListener('click', closePayModal);

  if (payInvoiceModal) {
    payInvoiceModal.addEventListener('click', function (e) {
      if (e.target === payInvoiceModal) {
        closePayModal();
      }
    });
  }

  if (payInvoiceForm) {
    payInvoiceForm.addEventListener('submit', function (e) {
      e.preventDefault();
      closePayModal();

if (invoiceStatus104) {
        invoiceStatus104.className = 'status-badge status-completed';
        invoiceStatus104.textContent = 'Paid';
      }

if (payBtn104) {
        payBtn104.className = 'btn-table-action download-inv-btn';
        payBtn104.textContent = 'Receipt PDF';
        payBtn104.disabled = true;
      }

if (pendingAmount) {
        pendingAmount.textContent = '$0.00';
        pendingAmount.classList.remove('text-gold');
        pendingAmount.classList.add('text-emerald');
      }

      showToast('Payment of $1,650.00 authorized! Receipt generated for #INV-2026-104.');
    });
  }

var downloadBtns = document.querySelectorAll('.download-report-btn, .download-inv-btn');
  downloadBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.getAttribute('data-report') || this.getAttribute('data-inv') || 'Document';
      showToast('Generating official encrypted PDF for ' + item + '...');
    });
  });

var profileUpdateForm = document.getElementById('profileUpdateForm');
  var profileNameInput = document.getElementById('profileNameInput');
  var userDisplayName = document.getElementById('userDisplayName');

  if (profileUpdateForm) {
    profileUpdateForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (profileNameInput && userDisplayName) {
        userDisplayName.textContent = profileNameInput.value;
      }
      showToast('Estate profile preferences saved successfully.');
    });
  }

var chartDots = document.querySelectorAll('.chart-dot');
  chartDots.forEach(function (dot) {
    dot.addEventListener('mouseenter', function () {
      var val = this.getAttribute('data-val');
      if (val) {
        showToast(val, 2000);
      }
    });
  });

var convItems = document.querySelectorAll('.conv-item');
  var activeChatName = document.getElementById('activeChatName');
  var activeChatStatus = document.getElementById('activeChatStatus');
  var activeChatAvatar = document.getElementById('activeChatAvatar');
  var chatMessagesContainer = document.getElementById('chatMessagesContainer');
  var chatSendForm = document.getElementById('chatSendForm');
  var chatInputText = document.getElementById('chatInputText');
  var chatSearchInput = document.getElementById('chatSearchInput');
  var chatFilterPills = document.querySelectorAll('.chat-pill[data-chat-filter]');
  var callConciergeBtn = document.getElementById('callConciergeBtn');

  var contactMetadata = {
    marcus: {
      name: 'Marcus Vance, Master Arborist',
      status: 'Active on Property — North Courtyard Specimen #04',
      avatar: 'assets/team_marcus.jpg',
      initialMsg: 'Good morning Yash! Our crew has safely set up the zero-impact electric lifts on the North Courtyard lawn.'
    },
    elena: {
      name: 'Elena Rostova, Private Concierge',
      status: 'Concierge Desk Active — Responding within 5m',
      avatar: 'assets/client_elena.jpg',
      initialMsg: 'Hello Yash, your seasonal tree preservation warranty extension has been approved. The official digital certificate is ready.'
    },
    david: {
      name: 'David Cole, Crane Specialist',
      status: 'Off-Site — Next arrival Mar 28',
      avatar: 'assets/team_david.jpg',
      initialMsg: 'Site permits for the crane extraction on April 18 have been signed off by the local arboricultural department.'
    },
    kaelen: {
      name: 'Kaelen Reed, Specimen Preservationist',
      status: 'Lab Unit — Analyzing soil bio-data',
      avatar: 'assets/team_kaelen.jpg',
      initialMsg: 'The Japanese Weeping Cherry post-pruning aeration report has been filed and verified.'
    }
  };

convItems.forEach(function (item) {
    item.addEventListener('click', function () {
      convItems.forEach(function (c) { c.classList.remove('active'); });
      this.classList.add('active');

var unreadDot = this.querySelector('.conv-unread-dot');
      if (unreadDot) unreadDot.style.display = 'none';

      var contactKey = this.getAttribute('data-contact');
      var meta = contactMetadata[contactKey];
      if (meta) {
        if (activeChatName) activeChatName.textContent = meta.name;
        if (activeChatStatus) activeChatStatus.textContent = meta.status;
        if (activeChatAvatar) activeChatAvatar.src = meta.avatar;
      }

      if (chatMessagesContainer) {
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
      }
    });
  });

chatFilterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      chatFilterPills.forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');

      var filter = this.getAttribute('data-chat-filter');
      convItems.forEach(function (item) {
        var role = item.getAttribute('data-role');
        if (filter === 'all' || role === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

if (chatSearchInput) {
    chatSearchInput.addEventListener('input', function () {
      var query = this.value.toLowerCase().trim();
      convItems.forEach(function (item) {
        var text = item.textContent.toLowerCase();
        if (!query || text.indexOf(query) !== -1) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

if (chatSendForm && chatInputText && chatMessagesContainer) {
    chatSendForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var message = chatInputText.value.trim();
      if (!message) return;

      var timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

var sentRow = document.createElement('div');
      sentRow.className = 'message-row sent';
      sentRow.innerHTML =
        '<div class="message-bubble-wrap">' +
          '<span class="message-sender-meta">You (Yash) • ' + timeStr + '</span>' +
          '<div class="message-bubble">' + message + '</div>' +
        '</div>';

      chatMessagesContainer.appendChild(sentRow);
      chatInputText.value = '';
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

setTimeout(function () {
        var replyRow = document.createElement('div');
        replyRow.className = 'message-row received';
        replyRow.innerHTML =
          '<img src="assets/team_marcus.jpg" alt="Marcus" class="message-avatar" />' +
          '<div class="message-bubble-wrap">' +
            '<span class="message-sender-meta">Marcus Vance • Just now</span>' +
            '<div class="message-bubble">Received, Yash! I have recorded your note in today’s official field log. We will ensure this is handled precisely.</div>' +
          '</div>';

        chatMessagesContainer.appendChild(replyRow);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        showToast('New message from Lead Arborist Marcus Vance');
      }, 1200);
    });
  }

  if (callConciergeBtn) {
    callConciergeBtn.addEventListener('click', function () {
      showToast('Connecting encrypted 2-way arborist radio channel...');
    });
  }

var notifFilterPills = document.querySelectorAll('.filter-pill[data-notif-filter]');
  var notifFeedCards = document.querySelectorAll('.notif-feed-card[data-category]');
  var markAllReadPageBtn = document.getElementById('markAllReadPageBtn');
  var clearNonCriticalBtn = document.getElementById('clearNonCriticalBtn');
  var unreadNotifCount = document.getElementById('unreadNotifCount');

notifFilterPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      notifFilterPills.forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');

      var filter = this.getAttribute('data-notif-filter');

      notifFeedCards.forEach(function (card) {
        var cat = card.getAttribute('data-category');
        var isUnread = card.classList.contains('unread');

        if (filter === 'all') {
          card.style.display = 'block';
        } else if (filter === 'unread') {
          card.style.display = isUnread ? 'block' : 'none';
        } else if (filter === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

if (markAllReadPageBtn) {
    markAllReadPageBtn.addEventListener('click', function () {
      notifFeedCards.forEach(function (card) {
        card.classList.remove('unread');
      });
      if (unreadNotifCount) unreadNotifCount.textContent = '00';
      if (bellBadge) bellBadge.style.display = 'none';
      showToast('All estate notifications marked as read.');
    });
  }

if (clearNonCriticalBtn) {
    clearNonCriticalBtn.addEventListener('click', function () {
      var nonCriticalCards = document.querySelectorAll('.notif-feed-card:not(.unread)');
      nonCriticalCards.forEach(function (card) {
        card.style.display = 'none';
      });
      showToast('Archived non-critical estate notices.');
    });
  }

initHashTab();

})();
