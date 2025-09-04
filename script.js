// Face Recognition Attendance Display System - TV Optimized
document.addEventListener('DOMContentLoaded', function() {
    initializeFaceRecognitionSystem();
    
    // Auto-refresh every 30 seconds
    setInterval(() => {
        updateAttendanceDisplay();
        updateTimetableDisplay();
        updateLastUpdateTime();
        checkModeSwitch();
    }, 30000);
    
    // Check mode switch every minute
    setInterval(checkModeSwitch, 60000);
    
    // Optimize for TV display
    optimizeForTV();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // F11 for fullscreen
        if (e.key === 'F11') {
            e.preventDefault();
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
        
        // Admin panel shortcuts
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            showAdminPanel();
        }
        
        // Escape to close admin panel
        if (e.key === 'Escape') {
            const adminPanel = document.getElementById('adminPanel');
            if (adminPanel && adminPanel.style.display !== 'none') {
                hideAdminPanel();
            }
        }
    });
});

// Initialize the face recognition attendance system
function initializeFaceRecognitionSystem() {
    updateDateTime();
    updateAttendanceDisplay();
    updateStats();
    updateTimetableDisplay();
    updateHardwareStatusDisplay();
    updateLastUpdateTime();
    
    // Update time every second
    setInterval(updateDateTime, 1000);
    
    // Add keyboard shortcuts
    addKeyboardShortcuts();
    
    // Start face recognition simulation (for demo purposes)
    if (window.faceRecognitionManager) {
        window.faceRecognitionManager.startFaceRecognitionSimulation();
    }
    
    // Show admin button after 5 seconds (for demo purposes)
    setTimeout(() => {
        const adminFab = document.querySelector('.admin-fab');
        if (adminFab) {
            adminFab.style.display = 'block';
        }
    }, 5000);
    
    // Auto-refresh display every 30 seconds
    setInterval(() => {
        updateAttendanceDisplay();
        updateTimetableDisplay();
        updateLastUpdateTime();
        checkModeSwitch();
    }, 30000);
    
    // Check mode switch every minute
    setInterval(checkModeSwitch, 60000);
}

// Check if we need to switch between regular and free period mode
function checkModeSwitch() {
    if (!window.faceRecognitionManager) return;
    
    const isFreePeriod = window.faceRecognitionManager.isInFreePeriodMode();
    const regularMode = document.getElementById('regularMode');
    const freePeriodMode = document.getElementById('freePeriodMode');
    
    console.log('Mode switch check:', { isFreePeriod, regularMode: !!regularMode, freePeriodMode: !!freePeriodMode });
    
    if (isFreePeriod && regularMode.style.display !== 'none') {
        // Switch to free period mode
        console.log('Switching to FREE PERIOD mode');
        regularMode.style.display = 'none';
        freePeriodMode.style.display = 'grid';
        updateFreePeriodDisplay();
        
        // Show notification
        showNotification('Free Period Mode Activated! Creative tasks and leaderboard are now displayed.', 'success');
    } else if (!isFreePeriod && freePeriodMode.style.display !== 'none') {
        // Switch to regular mode
        console.log('Switching to REGULAR mode');
        freePeriodMode.style.display = 'none';
        regularMode.style.display = 'grid';
        updateRegularModeDisplay();
        
        // Show notification
        showNotification('Regular Class Mode Activated! Attendance and timetable are now displayed.', 'info');
    }
}

// Force free period mode for testing (can be removed in production)
function forceFreePeriodMode() {
    if (!window.faceRecognitionManager) return;
    
    // Temporarily set free period mode
    window.faceRecognitionManager.isFreePeriodMode = true;
    window.faceRecognitionManager.assignRandomTask();
    
    // Force mode switch
    checkModeSwitch();
}

// Force regular mode for testing (can be removed in production)
function forceRegularMode() {
    if (!window.faceRecognitionManager) return;
    
    // Temporarily set regular mode
    window.faceRecognitionManager.isFreePeriodMode = false;
    
    // Force mode switch
    checkModeSwitch();
}

// Toggle between regular and free period mode for testing
function toggleTestMode() {
    if (!window.faceRecognitionManager) return;
    
    const currentMode = window.faceRecognitionManager.isInFreePeriodMode();
    
    if (currentMode) {
        // Switch to regular mode
        forceRegularMode();
    } else {
        // Switch to free period mode
        forceFreePeriodMode();
    }
}

// Update regular mode display
function updateRegularModeDisplay() {
    updateAttendanceDisplay();
    updateTimetableDisplay();
}

// Update free period mode display
function updateFreePeriodDisplay() {
    updateTaskDisplay();
    updateLeaderboardDisplay();
    updateProgressDisplay();
    startTaskTimer();
}

// Update date and time display
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');
    
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    }
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Update last update time
function updateLastUpdateTime() {
    const lastUpdateElement = document.getElementById('lastUpdateTime');
    if (lastUpdateElement) {
        const now = new Date();
        lastUpdateElement.textContent = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Update attendance display
function updateAttendanceDisplay() {
    if (!window.faceRecognitionManager) return;
    
    const presentStudents = window.faceRecognitionManager.getPresentStudents();
    const absentStudents = window.faceRecognitionManager.getAbsentStudents();
    
    displayStudents('presentStudentsGrid', presentStudents, 'present');
    displayStudents('absentStudentsGrid', absentStudents, 'absent');
    
    updateStats();
    updateCounts();
}

// Display students in the specified grid
function displayStudents(gridId, students, status) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (students.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'empty-message';
        emptyMessage.innerHTML = `
            <i class="fas fa-users"></i>
            <p>No ${status === 'present' ? 'present' : 'absent'} students</p>
        `;
        grid.appendChild(emptyMessage);
        return;
    }
    
    students.forEach(student => {
        const studentCard = createStudentCard(student, status);
        grid.appendChild(studentCard);
    });
}

// Create a student card element - Compact for TV
function createStudentCard(student, status) {
    const card = document.createElement('div');
    card.className = `student-card ${status}`;
    card.setAttribute('data-student-id', student.id);
    
    const checkInTime = student.checkInTime ? 
        new Date(student.checkInTime).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        }) : '';
    
    card.innerHTML = `
        <div class="student-info">
            <div class="student-avatar">
                ${getInitials(student.name)}
            </div>
            <div class="student-name">${student.name}</div>
            <div class="student-roll">${student.rollNo}</div>
            ${checkInTime ? `<div class="student-time">${checkInTime}</div>` : ''}
        </div>
    `;
    
    return card;
}

// Get initials from name
function getInitials(name) {
    return name.split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

// Update statistics display
function updateStats() {
    if (!window.faceRecognitionManager) return;
    
    const stats = window.faceRecognitionManager.getAttendanceStats();
    
    const totalElement = document.getElementById('totalStudents');
    const presentElement = document.getElementById('presentStudents');
    const absentElement = document.getElementById('absentStudents');
    
    if (totalElement) totalElement.textContent = stats.total;
    if (presentElement) presentElement.textContent = stats.present;
    if (absentElement) absentElement.textContent = stats.absent;
}

// Update count badges
function updateCounts() {
    if (!window.faceRecognitionManager) return;
    
    const presentCount = window.faceRecognitionManager.getPresentStudents().length;
    const absentCount = window.faceRecognitionManager.getAbsentStudents().length;
    
    const presentCountElement = document.getElementById('presentCount');
    const absentCountElement = document.getElementById('absentCount');
    
    if (presentCountElement) presentCountElement.textContent = presentCount;
    if (absentCountElement) absentCountElement.textContent = absentCount;
}

// Update timetable display - Compact for TV
function updateTimetableDisplay() {
    if (!window.faceRecognitionManager) return;
    
    const timetableGrid = document.getElementById('timetableGrid');
    const currentPeriodElement = document.getElementById('currentPeriod');
    
    if (!timetableGrid) return;
    
    const timetable = window.faceRecognitionManager.getTodayTimetable();
    const currentPeriod = window.faceRecognitionManager.getCurrentPeriod();
    
    // Update current period indicator
    if (currentPeriodElement && currentPeriod) {
        currentPeriodElement.textContent = currentPeriod.name;
    } else if (currentPeriodElement) {
        currentPeriodElement.textContent = '--';
    }
    
    if (timetable.length === 0) {
        timetableGrid.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-calendar-alt"></i>
                <p>No timetable available</p>
            </div>
        `;
        return;
    }
    
    timetableGrid.innerHTML = '';
    
    timetable.forEach(period => {
        const periodCard = createPeriodCard(period, window.faceRecognitionManager);
        timetableGrid.appendChild(periodCard);
    });
}

// Create period card element - Compact for TV
function createPeriodCard(period, manager) {
    const card = document.createElement('div');
    const status = manager.getPeriodStatus(period);
    
    card.className = `period-card ${status}`;
    if (period.type === 'free') {
        card.classList.add('free');
    }
    
    const periodName = period.name.length > 12 ? 
        period.name.substring(0, 12) + '...' : period.name;
    
    const subject = period.subject.length > 15 ? 
        period.subject.substring(0, 15) + '...' : period.subject;
    
    const teacher = period.teacher.length > 12 ? 
        period.teacher.substring(0, 12) + '...' : period.teacher;
    
    card.innerHTML = `
        <div class="period-time">${period.time}</div>
        <div class="period-details">
            <div class="period-name">${periodName}</div>
            <div class="period-subject">${subject}</div>
            ${period.teacher ? `<div class="period-teacher">${teacher}</div>` : ''}
            ${period.type === 'free' && period.activity ? `<div class="period-activity">${period.activity}</div>` : ''}
        </div>
    `;
    
    return card;
}

// Update task display
function updateTaskDisplay() {
    if (!window.faceRecognitionManager) return;
    
    const taskContent = document.getElementById('taskContent');
    const currentTask = window.faceRecognitionManager.getCurrentTask();
    
    if (!taskContent || !currentTask) return;
    
    taskContent.innerHTML = `
        <div class="task-title">${currentTask.title}</div>
        <div class="task-description">${currentTask.description}</div>
        <div class="task-instructions">
            <h4>Instructions:</h4>
            <ul>
                ${currentTask.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ul>
        </div>
        <div class="task-motivation">${currentTask.motivation}</div>
    `;
}

// Update leaderboard display
function updateLeaderboardDisplay() {
    if (!window.faceRecognitionManager) return;
    
    const leaderboardGrid = document.getElementById('leaderboardGrid');
    const leaderboard = window.faceRecognitionManager.getLeaderboard();
    
    if (!leaderboardGrid) return;
    
    if (leaderboard.length === 0) {
        leaderboardGrid.innerHTML = `
            <div class="empty-message">
                <i class="fas fa-trophy"></i>
                <p>No leaderboard data available</p>
            </div>
        `;
        return;
    }
    
    leaderboardGrid.innerHTML = '';
    
    // Show top 10 students
    leaderboard.slice(0, 10).forEach(student => {
        const leaderboardItem = createLeaderboardItem(student);
        leaderboardGrid.appendChild(leaderboardItem);
    });
}

// Create leaderboard item
function createLeaderboardItem(student) {
    const item = document.createElement('div');
    item.className = `leaderboard-item ${student.rankClass}`;
    
    const rankText = student.rank <= 3 ? 
        ['🥇', '🥈', '🥉'][student.rank - 1] : 
        student.rank;
    
    item.innerHTML = `
        <div class="rank-badge">${rankText}</div>
        <div class="student-info-leaderboard">
            <div class="student-name-leaderboard">${student.name}</div>
            <div class="student-roll-leaderboard">${student.rollNo}</div>
        </div>
        <div class="score-display">${student.creativePoints} pts</div>
    `;
    
    return item;
}

// Daily tasks data
const dailyTasks = {
    oddOneOut: {
        questions: [
            {
                words: ['Apple', 'Banana', 'Orange', 'Book', 'Mango'],
                answer: 'Book'
            },
            {
                words: ['Car', 'Bus', 'Train', 'Pizza', 'Plane'],
                answer: 'Pizza'
            },
            // Add more questions
        ]
    },
    jumbleWords: {
        words: [
            { jumbled: 'PUTMOCER', answer: 'COMPUTER' },
            { jumbled: 'NEOHP', answer: 'PHONE' },
            // Add more words
        ]
    },
    sudoku: {
        // Daily Sudoku puzzle data
        grid: [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]
        ]
    },
    pictureWord: {
        questions: [
            {
                imageUrl: 'path/to/image1.jpg',
                answer: 'COMPUTER'
            },
            {
                imageUrl: 'path/to/image2.jpg',
                answer: 'SCHOOL'
            },
            // Add more picture-word pairs
        ]
    }
};

// Update daily tasks display
function updateDailyTasksDisplay() {
    const taskRefreshTime = document.getElementById('taskRefreshTime');
    if (taskRefreshTime) {
        const now = new Date();
        const nextRefresh = new Date(now);
        nextRefresh.setHours(24, 0, 0, 0);
        const timeUntilRefresh = nextRefresh - now;
        const hoursLeft = Math.floor(timeUntilRefresh / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeUntilRefresh % (1000 * 60 * 60)) / (1000 * 60));
        taskRefreshTime.textContent = `Updates in ${hoursLeft}h ${minutesLeft}m`;
    }

    // Update task status from localStorage
    const taskStatuses = JSON.parse(localStorage.getItem('dailyTaskStatuses') || '{}');
    Object.keys(taskStatuses).forEach(taskId => {
        const taskCard = document.getElementById(taskId);
        if (taskCard) {
            const statusBadge = taskCard.querySelector('.status-badge');
            const startButton = taskCard.querySelector('.start-task-btn');
            if (statusBadge && startButton) {
                statusBadge.textContent = taskStatuses[taskId];
                if (taskStatuses[taskId] === 'Completed') {
                    statusBadge.classList.add('completed');
                    startButton.disabled = true;
                } else if (taskStatuses[taskId] === 'In Progress') {
                    statusBadge.classList.add('in-progress');
                }
            }
        }
    });
}

// Start a daily task
function startTask(taskId) {
    const taskStatuses = JSON.parse(localStorage.getItem('dailyTaskStatuses') || '{}');
    
    // Update task status
    taskStatuses[taskId] = 'In Progress';
    localStorage.setItem('dailyTaskStatuses', JSON.stringify(taskStatuses));
    
    // Update display
    updateDailyTasksDisplay();
    
    // Show task modal based on type
    switch(taskId) {
        case 'oddOneOut':
            showOddOneOutTask();
            break;
        case 'jumbleWords':
            showJumbleWordsTask();
            break;
        case 'sudoku':
            showSudokuTask();
            break;
        case 'pictureWord':
            showPictureWordTask();
            break;
    }
}

// Reset daily tasks at midnight
function checkAndResetDailyTasks() {
    const lastReset = localStorage.getItem('lastTaskReset');
    const now = new Date();
    const today = now.toDateString();
    
    if (lastReset !== today) {
        // Reset all task statuses
        localStorage.setItem('dailyTaskStatuses', '{}');
        localStorage.setItem('lastTaskReset', today);
        updateDailyTasksDisplay();
    }
}

// Initialize daily tasks
document.addEventListener('DOMContentLoaded', function() {
    updateDailyTasksDisplay();
    checkAndResetDailyTasks();
    
    // Check for reset every minute
    setInterval(checkAndResetDailyTasks, 60000);
    
    // Update countdown every minute
    setInterval(updateDailyTasksDisplay, 60000);
});

// Start task timer
function startTaskTimer() {
    if (!window.faceRecognitionManager) return;
    
    const currentTask = window.faceRecognitionManager.getCurrentTask();
    if (!currentTask) return;
    
    const taskTimer = document.getElementById('taskTimer');
    if (!taskTimer) return;
    
    // Calculate remaining time
    const now = new Date();
    const currentPeriod = window.faceRecognitionManager.getCurrentPeriod();
    
    if (currentPeriod && currentPeriod.type === 'free') {
        const startTime = new Date();
        startTime.setHours(parseInt(currentPeriod.startTime.split(':')[0]));
        startTime.setMinutes(parseInt(currentPeriod.startTime.split(':')[1]));
        
        const endTime = new Date();
        endTime.setHours(parseInt(currentPeriod.endTime.split(':')[0]));
        endTime.setMinutes(parseInt(currentPeriod.endTime.split(':')[1]));
        
        const updateTimer = () => {
            const now = new Date();
            const remaining = Math.max(0, endTime - now);
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            
            taskTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (remaining > 0) {
                setTimeout(updateTimer, 1000);
            } else {
                taskTimer.textContent = "Time's Up!";
            }
        };
        
        updateTimer();
    }
}

// Update hardware status display
function updateHardwareStatusDisplay() {
    if (!window.hardwareStatus) return;
    
    const statusItems = document.querySelectorAll('.status-text');
    statusItems.forEach(item => {
        const component = item.textContent.toLowerCase();
        if (window.hardwareStatus[component]) {
            const status = window.hardwareStatus[component].status;
            item.textContent = status;
            item.className = `status-text ${status === 'connected' || status === 'online' || status === 'active' ? '' : 'offline'}`;
        }
    });
}

// Toggle admin panel visibility
function toggleAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.style.display = adminPanel.style.display === 'none' ? 'block' : 'none';
    }
}

// Hide admin panel
function hideAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.style.display = 'none';
    }
}

// Show admin panel
function showAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        adminPanel.style.display = 'block';
        updateAdminPanel();
    }
}

// Update admin panel content
function updateAdminPanel() {
    const adminControls = document.querySelector('.admin-controls');
    if (!adminControls) return;
    
    // Check if test buttons already exist to prevent duplicates
    const existingTestButtons = adminControls.querySelector('.test-mode-buttons');
    if (existingTestButtons) return; // Already have test buttons, don't add more
    
    // Add mode testing buttons
    const modeTestButtons = document.createElement('div');
    modeTestButtons.className = 'test-mode-buttons';
    modeTestButtons.innerHTML = `
        <button class="btn btn-success" onclick="forceFreePeriodMode()">
            <i class="fas fa-palette"></i> Test Free Period
        </button>
        <button class="btn btn-info" onclick="forceRegularMode()">
            <i class="fas fa-chalkboard-teacher"></i> Test Regular Mode
        </button>
    `;
    
    // Insert mode test buttons at the beginning
    adminControls.insertBefore(modeTestButtons, adminControls.firstChild);
}

// Refresh data from external source
async function refreshData() {
    if (window.faceRecognitionManager) {
        showNotification('Refreshing data...', 'info');
        const result = await window.faceRecognitionManager.refreshData();
        
        if (result.success) {
            showNotification(result.message, 'success');
            updateHardwareStatusDisplay();
            updateTimetableDisplay();
            checkModeSwitch();
            updateLastUpdateTime();
        } else {
            showNotification(result.message, 'error');
        }
    }
}

// Export attendance data as PDF
function exportAttendance() {
    if (!window.faceRecognitionManager) {
        showNotification('Face Recognition Manager not available', 'error');
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Add title
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        doc.setFontSize(20);
        doc.text('Attendance Report', 105, 15, { align: 'center' });
        
        doc.setFontSize(12);
        doc.text(dateStr, 105, 25, { align: 'center' });
        
        // Add class info
        doc.setFontSize(14);
        doc.text('Class: Computer Science - Class 12 C', 15, 35);
        
        // Add attendance summary
        const stats = window.faceRecognitionManager.getAttendanceStats();
        doc.text(`Total Students: ${stats.total}`, 15, 45);
        doc.text(`Present: ${stats.present}`, 15, 52);
        doc.text(`Absent: ${stats.absent}`, 15, 59);
        doc.text(`Attendance Percentage: ${Math.round((stats.present / stats.total) * 100)}%`, 15, 66);

        // Add present students table
        const presentStudents = window.faceRecognitionManager.getPresentStudents();
        if (presentStudents.length > 0) {
            doc.setFontSize(14);
            doc.text('Present Students', 15, 80);
            
            const presentData = presentStudents.map(student => [
                student.rollNo,
                student.name,
                new Date(student.checkInTime).toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                })
            ]);

            doc.autoTable({
                startY: 85,
                head: [['Roll No', 'Name', 'Check-in Time']],
                body: presentData,
                theme: 'grid',
                headStyles: { fillColor: [40, 167, 69] }
            });
        }

        // Add absent students table
        const absentStudents = window.faceRecognitionManager.getAbsentStudents();
        if (absentStudents.length > 0) {
            const finalY = (doc.lastAutoTable && doc.lastAutoTable.finalY) || 85;
            doc.setFontSize(14);
            doc.text('Absent Students', 15, finalY + 15);

            const absentData = absentStudents.map(student => [
                student.rollNo,
                student.name
            ]);

            doc.autoTable({
                startY: finalY + 20,
                head: [['Roll No', 'Name']],
                body: absentData,
                theme: 'grid',
                headStyles: { fillColor: [220, 53, 69] }
            });
        }

        // Add timestamp and signature space
        const finalY = (doc.lastAutoTable && doc.lastAutoTable.finalY) || 200;
        doc.setFontSize(10);
        doc.text(`Generated on: ${now.toLocaleString('en-IN')}`, 15, finalY + 20);
        
        doc.text('Teacher\'s Signature: _________________', 15, finalY + 35);
        doc.text('Principal\'s Signature: _________________', 15, finalY + 45);

        // Save the PDF
        const filename = `Attendance_Report_${now.toISOString().split('T')[0]}.pdf`;
        doc.save(filename);
        
        showNotification('Attendance report exported as PDF!', 'success');
        updateLastUpdateTime();
    } catch (error) {
        console.error('Error generating PDF:', error);
        showNotification('Failed to generate PDF report', 'error');
    }
}

// Test hardware connections
async function testConnection() {
    if (window.faceRecognitionManager) {
        showNotification('Testing connections...', 'info');
        const results = await window.faceRecognitionManager.testHardwareConnections();
        
        let message = 'Connection test completed: ';
        Object.entries(results).forEach(([component, status]) => {
            message += `${component}: ${status}, `;
        });
        
        showNotification(message.slice(0, -2), 'success');
        updateHardwareStatusDisplay();
        updateLastUpdateTime();
    }
}

// Reset system
function resetSystem() {
    if (window.faceRecognitionManager) {
        if (confirm('Are you sure you want to reset the system? This will clear all attendance data.')) {
            window.faceRecognitionManager.resetSystem();
            showNotification('System reset completed!', 'success');
            updateLastUpdateTime();
        }
    }
}

// Show notification - TV optimized
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add keyboard shortcuts - TV optimized
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + R: Refresh data
        if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
            e.preventDefault();
            refreshData();
        }
        
        // Ctrl/Cmd + E: Export attendance
        if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
            e.preventDefault();
            exportAttendance();
        }
        
        // Ctrl/Cmd + T: Test connections
        if ((e.ctrlKey || e.metaKey) && e.key === 't') {
            e.preventDefault();
            testConnection();
        }
        
        // Ctrl/Cmd + A: Toggle admin panel
        if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
            e.preventDefault();
            toggleAdminPanel();
        }
        
        // Escape: Close admin panel
        if (e.key === 'Escape') {
            const adminPanel = document.getElementById('adminPanel');
            if (adminPanel && adminPanel.style.display !== 'none') {
                toggleAdminPanel();
            }
        }
        
        // F11: Toggle fullscreen (TV optimization)
        if (e.key === 'F11') {
            e.preventDefault();
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
    });
}

// Add system status indicator animation
function updateSystemStatus() {
    const systemStatus = document.getElementById('systemStatus');
    if (systemStatus) {
        const indicator = systemStatus.querySelector('i');
        if (indicator) {
            // Add pulsing animation
            indicator.style.animation = 'pulse 2s infinite';
        }
    }
}

// Initialize system status
document.addEventListener('DOMContentLoaded', function() {
    updateSystemStatus();
});

// Add click outside to close admin panel
document.addEventListener('click', function(e) {
    const adminPanel = document.getElementById('adminPanel');
    const adminFab = document.querySelector('.admin-fab');
    
    if (adminPanel && adminPanel.style.display !== 'none') {
        if (!adminPanel.contains(e.target) && !adminFab.contains(e.target)) {
            toggleAdminPanel();
        }
    }
});

// Add hardware status monitoring
function startHardwareMonitoring() {
    setInterval(() => {
        if (window.faceRecognitionManager) {
            // Simulate hardware status updates
            const components = ['camera', 'database', 'network'];
            components.forEach(component => {
                if (Math.random() < 0.1) { // 10% chance of status change
                    const statuses = ['connected', 'disconnected', 'online', 'offline', 'active', 'inactive'];
                    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                    window.faceRecognitionManager.updateHardwareStatus(component, randomStatus);
                }
            });
        }
    }, 30000); // Check every 30 seconds
}

// Start hardware monitoring (for demo purposes)
setTimeout(startHardwareMonitoring, 10000);

// TV-specific optimizations
function optimizeForTV() {
    // Set viewport for TV display
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no');
    }
    
    // Prevent context menu on right-click
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Optimize for TV remote navigation
    document.addEventListener('keydown', (e) => {
        // Arrow keys for navigation (TV remote)
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
            // Add navigation logic if needed
        }
    });
}
