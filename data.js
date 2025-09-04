// Face Recognition Attendance System Data
// Today's Timetable Data
const todayTimetable = [
    {
        id: 1,
        name: "Period 1",
        time: "08:00 - 09:00",
        startTime: "08:00",
        endTime: "09:00",
        subject: "Mathematics",
        teacher: "Dr. Sharma",
        type: "class"
    },
    {
        id: 2,
        name: "Period 2",
        time: "09:00 - 10:00",
        startTime: "09:00",
        endTime: "10:00",
        subject: "Physics",
        teacher: "Prof. Kumar",
        type: "class"
    },
    {
        id: 3,
        name: "Period 3",
        time: "10:00 - 11:00",
        startTime: "10:00",
        endTime: "11:00",
        subject: "Computer Science",
        teacher: "Ms. Patel",
        type: "class"
    },
    {
        id: 4,
        name: "Period 4",
        time: "11:00 - 12:00",
        startTime: "11:00",
        endTime: "12:00",
        subject: "English",
        teacher: "Mr. Johnson",
        type: "class"
    },
    {
        id: 5,
        name: "Lunch Break",
        time: "12:00 - 13:00",
        startTime: "12:00",
        endTime: "13:00",
        subject: "Break",
        teacher: "",
        type: "break"
    },
    {
        id: 6,
        name: "Period 6",
        time: "14:00 - 15:00",
        startTime: "14:00",
        endTime: "15:00",
        subject: "Free Period",
        teacher: "Creative Activity",
        type: "free",
        activity: "Drawing & Art"
    },
    {
        id: 7,
        name: "Period 7",
        time: "15:00 - 16:00",
        startTime: "15:00",
        endTime: "16:00",
        subject: "Physical Education",
        teacher: "Coach Gupta",
        type: "class"
    }
];

// Creative Tasks for Free Periods
const creativeTasks = [
    {
        id: 1,
        title: "Digital Art Masterpiece",
        description: "Create a stunning digital artwork using any digital tool of your choice",
        instructions: [
            "Choose a theme (nature, technology, fantasy, etc.)",
            "Use digital tools like Procreate, Photoshop, or online apps",
            "Incorporate at least 3 different colors",
            "Add creative elements and details",
            "Save your work and be ready to share"
        ],
        motivation: "Express your creativity and develop digital art skills!",
        duration: 60, // minutes
        category: "Digital Art"
    },
    {
        id: 2,
        title: "Creative Writing Challenge",
        description: "Write a short story or poem based on a given prompt",
        instructions: [
            "Choose from: Sci-Fi, Mystery, Fantasy, or Poetry",
            "Write 200-500 words",
            "Include dialogue and descriptive language",
            "Create an engaging beginning and ending",
            "Use your imagination freely"
        ],
        motivation: "Unleash your storytelling potential and improve writing skills!",
        duration: 60,
        category: "Creative Writing"
    },
    {
        id: 3,
        title: "Design Thinking Project",
        description: "Solve a real-world problem using design thinking principles",
        instructions: [
            "Identify a problem in your daily life",
            "Brainstorm 5 possible solutions",
            "Sketch your best solution",
            "Consider user needs and feasibility",
            "Present your idea to the class"
        ],
        motivation: "Develop problem-solving skills and innovative thinking!",
        duration: 60,
        category: "Problem Solving"
    },
    {
        id: 4,
        title: "Music & Sound Creation",
        description: "Create a musical piece or sound composition",
        instructions: [
            "Use any instrument or digital music tool",
            "Create a 30-second to 2-minute piece",
            "Include rhythm and melody",
            "Experiment with different sounds",
            "Record or document your creation"
        ],
        motivation: "Explore your musical talents and create something unique!",
        duration: 60,
        category: "Music & Sound"
    }
];

// Student data with face recognition IDs and performance scores
const students = [
    { id: 1, name: "Sana", rollNo: "CS001", present: false, checkInTime: null, faceId: "face_001", performanceScore: 85, tasksCompleted: 12, creativePoints: 450 },
    { id: 2, name: "Raftarr", rollNo: "CS002", present: false, checkInTime: null, faceId: "face_002", performanceScore: 92, tasksCompleted: 15, creativePoints: 520 },
    { id: 3, name: "Guru", rollNo: "CS003", present: false, checkInTime: null, faceId: "face_003", performanceScore: 78, tasksCompleted: 10, creativePoints: 380 },
    { id: 4, name: "Nandini", rollNo: "CS004", present: false, checkInTime: null, faceId: "face_004", performanceScore: 95, tasksCompleted: 18, creativePoints: 580 },
    { id: 5, name: "Vipin", rollNo: "CS005", present: false, checkInTime: null, faceId: "face_005", performanceScore: 88, tasksCompleted: 13, creativePoints: 470 },
    { id: 6, name: "Naina", rollNo: "CS006", present: false, checkInTime: null, faceId: "face_006", performanceScore: 91, tasksCompleted: 16, creativePoints: 510 },
    { id: 7, name: "Krish", rollNo: "CS007", present: false, checkInTime: null, faceId: "face_007", performanceScore: 82, tasksCompleted: 11, creativePoints: 420 },
    { id: 8, name: "Luv", rollNo: "CS008", present: false, checkInTime: null, faceId: "face_008", performanceScore: 89, tasksCompleted: 14, creativePoints: 480 },
    { id: 9, name: "Mohit", rollNo: "CS009", present: false, checkInTime: null, faceId: "face_009", performanceScore: 87, tasksCompleted: 12, creativePoints: 460 },
    { id: 10, name: "Rohit", rollNo: "CS010", present: false, checkInTime: null, faceId: "face_010", performanceScore: 93, tasksCompleted: 17, creativePoints: 540 },
    { id: 11, name: "Vaishnavi", rollNo: "CS011", present: false, checkInTime: null, faceId: "face_011", performanceScore: 86, tasksCompleted: 12, creativePoints: 440 },
    { id: 12, name: "Pandey", rollNo: "CS012", present: false, checkInTime: null, faceId: "face_012", performanceScore: 90, tasksCompleted: 15, creativePoints: 500 },
    { id: 13, name: "Emiway", rollNo: "CS013", present: false, checkInTime: null, faceId: "face_013", performanceScore: 84, tasksCompleted: 11, creativePoints: 430 },
    { id: 14, name: "Divine", rollNo: "CS014", present: false, checkInTime: null, faceId: "face_014", performanceScore: 94, tasksCompleted: 16, creativePoints: 550 },
    { id: 15, name: "Ikka", rollNo: "CS015", present: false, checkInTime: null, faceId: "face_015", performanceScore: 88, tasksCompleted: 13, creativePoints: 470 },
    { id: 16, name: "Bantai", rollNo: "CS016", present: false, checkInTime: null, faceId: "face_016", performanceScore: 85, tasksCompleted: 10, creativePoints: 400 },
    { id: 17, name: "Kallu", rollNo: "CS017", present: false, checkInTime: null, faceId: "face_017", performanceScore: 82, tasksCompleted: 12, creativePoints: 440 },
    { id: 18, name: "Diljit", rollNo: "CS018", present: false, checkInTime: null, faceId: "face_018", performanceScore: 89, tasksCompleted: 14, creativePoints: 480 },
    { id: 19, name: "Sidhu", rollNo: "CS019", present: false, checkInTime: null, faceId: "face_019", performanceScore: 87, tasksCompleted: 12, creativePoints: 460 },
    { id: 20, name: "Munni", rollNo: "CS020", present: false, checkInTime: null, faceId: "face_020", performanceScore: 93, tasksCompleted: 17, creativePoints: 540 }   
];

// Class information
const classInfo = {
    name: "Computer Science - Class A",
    section: "A",
    year: "2025",
    totalStudents: students.length,
    schedule: "Monday to Friday, 8:00 AM - 4:00 PM"
};

// Hardware status tracking
const hardwareStatus = {
    camera: { status: 'connected', lastCheck: new Date() },
    database: { status: 'online', lastCheck: new Date() },
    network: { status: 'active', lastCheck: new Date() }
};

// Face Recognition Attendance Manager
class FaceRecognitionAttendanceManager {
    constructor() {
        this.students = [...students];
        this.attendanceData = {};
        this.activityLog = [
            {
                id: 1,
                type: 'attendance',
                title: 'Morning Attendance',
                description: 'Daily attendance check completed',
                timestamp: new Date().toISOString(),
                status: 'completed'
            },
            {
                id: 2,
                type: 'system',
                title: 'System Check',
                description: 'Hardware status verified',
                timestamp: new Date(Date.now() - 300000).toISOString(), // 5 minutes ago
                status: 'completed'
            },
            {
                id: 3,
                type: 'task',
                title: 'Creative Assignment',
                description: 'Drawing activity assigned to students',
                timestamp: new Date(Date.now() - 600000).toISOString(), // 10 minutes ago
                status: 'pending'
            },
            {
                id: 4,
                type: 'creative',
                title: 'Student Task Started',
                description: 'Adarsh Kumar started digital art project',
                timestamp: new Date(Date.now() - 120000).toISOString(), // 2 minutes ago
                status: 'pending'
            },
            {
                id: 5,
                type: 'creative',
                title: 'Task Completed',
                description: 'Priya Sharma finished creative writing',
                timestamp: new Date(Date.now() - 180000).toISOString(), // 3 minutes ago
                status: 'completed'
            }
        ];
        this.hardwareStatus = { ...hardwareStatus };
        this.todayTimetable = [...todayTimetable];
        this.creativeTasks = [...creativeTasks];
        this.currentPeriod = null;
        this.currentTask = null;
        this.taskProgress = {};
        this.isFreePeriodMode = false;
        
        this.loadFromLocalStorage();
        this.updateCurrentPeriod();
        this.checkFreePeriodMode();
    }

    // Update current period based on current time
    updateCurrentPeriod() {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert to minutes
        
        this.currentPeriod = null;
        
        this.todayTimetable.forEach(period => {
            const startMinutes = this.timeToMinutes(period.startTime);
            const endMinutes = this.timeToMinutes(period.endTime);
            
            if (currentTime >= startMinutes && currentTime < endMinutes) {
                this.currentPeriod = period;
            }
        });
        
        this.checkFreePeriodMode();
        return this.currentPeriod;
    }

    // Check if we're in free period mode
    checkFreePeriodMode() {
        if (this.currentPeriod && this.currentPeriod.type === 'free') {
            this.isFreePeriodMode = true;
            this.assignRandomTask();
        } else {
            this.isFreePeriodMode = false;
            this.currentTask = null;
        }
    }

    // Assign a random creative task
    assignRandomTask() {
        if (this.creativeTasks.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.creativeTasks.length);
            this.currentTask = this.creativeTasks[randomIndex];
            
            // Initialize task progress for all students
            this.students.forEach(student => {
                this.taskProgress[student.id] = {
                    taskId: this.currentTask.id,
                    started: false,
                    completed: false,
                    startTime: null,
                    completionTime: null,
                    points: 0
                };
            });
        }
    }

    // Get current task
    getCurrentTask() {
        return this.currentTask;
    }

    // Check if in free period mode
    isInFreePeriodMode() {
        return this.isFreePeriodMode;
    }

    // Get task progress for a student
    getTaskProgress(studentId) {
        return this.taskProgress[studentId] || null;
    }

    // Start task for a student
    startTask(studentId) {
        if (this.taskProgress[studentId]) {
            this.taskProgress[studentId].started = true;
            this.taskProgress[studentId].startTime = new Date().toISOString();
            this.saveToLocalStorage();
        }
    }

    // Complete task for a student
    completeTask(studentId, quality = 'good') {
        if (this.taskProgress[studentId] && this.taskProgress[studentId].started) {
            this.taskProgress[studentId].completed = true;
            this.taskProgress[studentId].completionTime = new Date().toISOString();
            
            // Award points based on quality
            const points = quality === 'excellent' ? 50 : quality === 'good' ? 40 : quality === 'average' ? 30 : 20;
            this.taskProgress[studentId].points = points;
            
            // Update student performance
            const student = this.students.find(s => s.id === studentId);
            if (student) {
                student.creativePoints += points;
                student.tasksCompleted += 1;
                student.performanceScore = Math.min(100, student.performanceScore + 2);
            }
            
            this.saveToLocalStorage();
        }
    }

    // Get leaderboard data
    getLeaderboard() {
        return this.students
            .sort((a, b) => b.creativePoints - a.creativePoints)
            .map((student, index) => ({
                ...student,
                rank: index + 1,
                rankClass: index < 3 ? `top-${index + 1}` : ''
            }));
    }

    // Get task progress summary
    getTaskProgressSummary() {
        const total = Object.keys(this.taskProgress).length;
        const started = Object.values(this.taskProgress).filter(p => p.started).length;
        const completed = Object.values(this.taskProgress).filter(p => p.completed).length;
        const totalPoints = Object.values(this.taskProgress).reduce((sum, p) => sum + (p.points || 0), 0);
        
        return { total, started, completed, totalPoints };
    }

    getActivityLog() {
        return this.activityLog.map(activity => ({
            ...activity,
            completed: activity.status === 'completed' || activity.status === 'success'
        }));
    }

    // Convert time string to minutes
    timeToMinutes(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        return hours * 60 + minutes;
    }

    // Get current period
    getCurrentPeriod() {
        this.updateCurrentPeriod();
        return this.currentPeriod;
    }

    // Get today's timetable
    getTodayTimetable() {
        return this.todayTimetable;
    }

    // Get period status (current, completed, upcoming)
    getPeriodStatus(period) {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        const startMinutes = this.timeToMinutes(period.startTime);
        const endMinutes = this.timeToMinutes(period.endTime);
        
        if (currentTime >= startMinutes && currentTime < endMinutes) {
            return 'current';
        } else if (currentTime >= endMinutes) {
            return 'completed';
        } else {
            return 'upcoming';
        }
    }

    // Process face recognition
    async processFaceRecognition(faceId, confidence = 0.95) {
        try {
            // Simulate processing delay
            await this.simulateProcessing();
            
            const student = this.students.find(s => s.faceId === faceId);
            
            if (student) {
                if (confidence >= 0.8) {
                    this.markStudentPresent(student.id, 'face_recognition');
                    
                    // If in free period mode, automatically start task
                    if (this.isFreePeriodMode && this.currentTask) {
                        this.startTask(student.id);
                    }
                    
                    this.addActivityLog('present', student.name, `Face recognized with ${Math.round(confidence * 100)}% confidence`);
                    return { success: true, student, action: 'marked_present' };
                } else {
                    this.addActivityLog('unknown', student.name, `Low confidence: ${Math.round(confidence * 100)}%`);
                    return { success: false, student, action: 'low_confidence' };
                }
            } else {
                this.addActivityLog('error', 'Unknown', `Face ID ${faceId} not found in database`);
                return { success: false, student: null, action: 'face_not_found' };
            }
        } catch (error) {
            this.addActivityLog('error', 'System', `Face recognition error: ${error.message}`);
            return { success: false, student: null, action: 'system_error' };
        }
    }

    // Simulate processing delay
    simulateProcessing() {
        return new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    }

    // Mark student as present
    markStudentPresent(studentId, method = 'face_recognition') {
        const student = this.students.find(s => s.id === studentId);
        if (student && !student.present) {
            student.present = true;
            student.checkInTime = new Date().toISOString();
            
            this.attendanceData[studentId] = {
                present: true,
                checkInTime: student.checkInTime,
                method: method
            };
            
            this.saveToLocalStorage();
            this.addActivityLog('present', student.name, `Marked present via ${method}`);
        }
    }

    // Mark student as absent
    markStudentAbsent(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (student && student.present) {
            student.present = false;
            student.checkInTime = null;
            
            delete this.attendanceData[studentId];
            
            this.saveToLocalStorage();
            this.addActivityLog('absent', student.name, 'Marked absent');
        }
    }

    // Add activity to log
    addActivityLog(type, studentName, description) {
        const activity = {
            id: Date.now(),
            type,
            studentName,
            description,
            timestamp: new Date().toISOString()
        };
        
        this.activityLog.unshift(activity);
        
        // Keep only last 50 activities
        if (this.activityLog.length > 50) {
            this.activityLog = this.activityLog.slice(0, 50);
        }
    }

    // Get recent activities
    getRecentActivities(limit = 10) {
        return this.activityLog.slice(0, limit);
    }

    // Get present students
    getPresentStudents() {
        return this.students.filter(student => student.present);
    }

    // Get absent students
    getAbsentStudents() {
        return this.students.filter(student => !student.present);
    }

    // Get attendance statistics
    getAttendanceStats() {
        const present = this.getPresentStudents().length;
        const total = this.students.length;
        const absent = total - present;
        
        return {
            total,
            present,
            absent,
            percentage: total > 0 ? Math.round((present / total) * 100) : 0
        };
    }

    // Update hardware status
    updateHardwareStatus(component, status) {
        if (this.hardwareStatus[component]) {
            this.hardwareStatus[component].status = status;
            this.hardwareStatus[component].lastCheck = new Date();
        }
    }

    // Get hardware status
    getHardwareStatus() {
        return this.hardwareStatus;
    }

    // Test hardware connections
    async testHardwareConnections() {
        const results = {};
        
        // Simulate testing each component
        for (const component of Object.keys(this.hardwareStatus)) {
            await new Promise(resolve => setTimeout(resolve, 500));
            const isWorking = Math.random() > 0.1; // 90% success rate
            
            if (isWorking) {
                this.updateHardwareStatus(component, component === 'camera' ? 'connected' : component === 'database' ? 'online' : 'active');
                results[component] = 'working';
            } else {
                this.updateHardwareStatus(component, component === 'camera' ? 'disconnected' : component === 'database' ? 'offline' : 'inactive');
                results[component] = 'failed';
            }
        }
        
        return results;
    }

    // Refresh data from external source
    async refreshData() {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Update hardware status
            this.hardwareStatus.camera.lastCheck = new Date();
            this.hardwareStatus.database.lastCheck = new Date();
            this.hardwareStatus.network.lastCheck = new Date();
            
            // Update current period
            this.updateCurrentPeriod();
            
            return {
                success: true,
                message: 'Data refreshed successfully',
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            return {
                success: false,
                message: `Failed to refresh data: ${error.message}`,
                timestamp: new Date().toISOString()
            };
        }
    }

    // Reset system
    resetSystem() {
        this.students.forEach(student => {
            student.present = false;
            student.checkInTime = null;
        });
        
        this.attendanceData = {};
        this.activityLog = [];
        this.taskProgress = {};
        
        this.saveToLocalStorage();
    }

    // Export attendance data
    exportAttendance() {
        const exportData = {
            date: new Date().toISOString(),
            classInfo,
            attendance: this.attendanceData,
            students: this.students,
            activityLog: this.activityLog,
            hardwareStatus: this.hardwareStatus,
            timetable: this.todayTimetable,
            currentPeriod: this.currentPeriod,
            currentTask: this.currentTask,
            taskProgress: this.taskProgress,
            leaderboard: this.getLeaderboard()
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `attendance_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }

    // Save to localStorage
    saveToLocalStorage() {
        try {
            localStorage.setItem('faceRecognitionAttendanceData', JSON.stringify({
                students: this.students,
                attendanceData: this.attendanceData,
                activityLog: this.activityLog,
                hardwareStatus: this.hardwareStatus,
                taskProgress: this.taskProgress
            }));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
        }
    }

    // Load from localStorage
    loadFromLocalStorage() {
        try {
            const savedData = localStorage.getItem('faceRecognitionAttendanceData');
            if (savedData) {
                const data = JSON.parse(savedData);
                if (data.students) this.students = data.students;
                if (data.attendanceData) this.attendanceData = data.attendanceData;
                if (data.activityLog) this.activityLog = data.activityLog;
                if (data.hardwareStatus) this.hardwareStatus = data.hardwareStatus;
                if (data.taskProgress) this.taskProgress = data.taskProgress;
            }
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
        }
    }

    // Start face recognition simulation (for demo purposes)
    startFaceRecognitionSimulation() {
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every interval
                const randomStudent = this.students[Math.floor(Math.random() * this.students.length)];
                const confidence = 0.8 + Math.random() * 0.2; // 80-100% confidence
                
                this.processFaceRecognition(randomStudent.faceId, confidence);
            }
        }, 10000); // Every 10 seconds
    }
}

// Initialize the manager
const faceRecognitionManager = new FaceRecognitionAttendanceManager();

// Make available globally
window.faceRecognitionManager = faceRecognitionManager;
window.classInfo = classInfo;
window.hardwareStatus = hardwareStatus;
window.todayTimetable = todayTimetable;
window.creativeTasks = creativeTasks;
