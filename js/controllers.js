// this looks good ng-app="XXX" must match this
var myApp = angular.module('myApp', [
    // keep it like this
]);

// now the controller is called LiamController, so everything
// you bind to $scope is available inside the element
// that you declare to be controllerd by this in the html
myApp.controller('LiamController', function ($scope) {
    $scope.firstYear = [
        {name: 'Mathematical Methods I', code: 'PHAS1245'},
        {name: 'Mathematical Methods II', code: 'PHAS1246'},
        {name: 'Classical Mechanics', code: 'PHAS1247'},
        {name: 'Atoms, Stars, and the Universe', code: 'PHAS1202'},
        {name: 'Thermal Physics', code: 'PHAS1228'},
        {name: 'Waves, Optics, and Acoustics', code: 'PHAS1224'},
        {name: 'Practical Skills 1C', code: 'PHAS1240'},
        {name: 'Practical Mathematics I', code: 'PHAS1449'}
    ];

    $scope.secondYear = [
        {name: 'Mathematical Methods III', code: 'PHAS1245'},
        {name: 'Quantum Physics', code: 'PHAS1246'},
        {name: 'Electricity and Magnetism', code: 'PHAS1247'},
        {name: 'Atomic and Molecular Physics', code: 'PHAS1202'},
        {name: 'Statistical Thermodynamics', code: 'PHAS1228'},
        {name: 'Mathematics for Theoretical Physicists', code: 'PHAS1224'},
        {name: 'Mathematics for P & A', code: 'PHAS1240'},
        {name: 'Practical Mathematics II', code: 'PHAS1449'}
    ];

    $scope.thirdYear = [
        {name: 'Quantum Mechanics', code: 'PHAS1245'},
        {name: 'Solid State Physics', code: 'PHAS1246'},
        {name: 'Nuclear and Particle Physics', code: 'PHAS1247'},
        {name: 'Electromagnetic Theory', code: 'PHAS1202'},
        {name: 'Theory of Dynamical Systems', code: 'PHAS1228'},
        {name: 'Probability and Statistics', code: 'PHAS1224'},
        {name: 'Object Oriented Programming - Java', code: 'PHAS1240'},
        {name: 'Physics Group Project', code: 'PHAS1419'}
    ];
    $scope.fourthYear = [
        {name: 'Physics Project', code: 'PHAS1245'},
        {name: 'Quantum Field Theory', code: 'PHAS1246'},
        {name: 'Nuclear and Particle Physics', code: 'PHAS1247'},
        {name: 'Electromagnetic Theory', code: 'PHAS1202'},
        {name: 'Theory of Dynamical Systems', code: 'PHAS1228'},
        {name: 'Probability and Statistics', code: 'PHAS1224'},
        {name: 'Object Oriented Programming - Java', code: 'PHAS1240'},
        {name: 'Physics Group Project', code: 'PHAS1419'}
    ]

    $scope.decs = [

        {name: 'Developing Effective Communications I', code:'PHAS1901'},

        {name: 'Developing Effective Communications II', code:'PHAS2901'}
    ]
    $scope.Math = window.Math;

    $scope.decMath = {};


    // make an object to store the results in with ng-model. each course is identified by its code:

    /*
     {
     PHAS1245: 12,
     PHAS1246: 89,
     ...
     }
     */


    $scope.firstYearResults = {};
    $scope.secondYearResults = {};
    $scope.thirdYearResults = {};
    $scope.fourthYearResults = {};

    // give every first year course a random grade of [0, 100]
    angular.forEach($scope.firstYear, function (course) {
        $scope.firstYearResults[course.code] = 50;
    });
    angular.forEach($scope.secondYear, function (course) {
        $scope.secondYearResults[course.code] = 50;
    });
    angular.forEach($scope.thirdYear, function (course) {
        $scope.thirdYearResults[course.code] = 0;
    });
    angular.forEach($scope.fourthYear, function (course) {
        $scope.fourthYearResults[course.code] = 0;
    });
    angular.forEach($scope.decs, function (course) {
        $scope.decMath[course.code] = 50;
    });



    // it seems they need to have A value, but it doesn't ahve to be random and you can
    // fill it out manuyally now because of ng-model
    /*angular.forEach($scope.secondYear, function(course) {
     $scope.secondYearResults[course.code] = 0;
     });/**/

    // define a default message for average value
    $scope.firstYearAverage = 'huh';
    $scope.secondYearAverage = 'hurrdurr';
    $scope.thirdYearAverage = 'humpdump';
    $scope.fourthYearAverage = 'holder';

    // define a function to be called when the button is clicked (or on some other occasion)
    $scope.calculateAverage = function () {
        console.log('Hi');
        // find all the grades by iterating over the firstYearResults object
        var firstYearGrades = [];
        var secondYearGrades = [];
        var thirdYearGrades = [];
        var fourthYearGrades = [];
        var decGrades = [];

        for (var firstYearKey in $scope.firstYearResults) {
            // meh
            firstYearGrades.push($scope.firstYearResults[firstYearKey]);
        }

        for (var secondYearKey in $scope.secondYearResults) {
            // meh
            secondYearGrades.push($scope.secondYearResults[secondYearKey]);
        }

        for (var thirdYearKey in $scope.thirdYearResults) {
            // meh
            thirdYearGrades.push($scope.thirdYearResults[thirdYearKey]);
        }

        for (var fourthYearKey in $scope.fourthYearResults) {
            // meh
            fourthYearGrades.push($scope.fourthYearResults[fourthYearKey]);
        }

        for(var decKey in $scope.decMath){
            decGrades.push($scope.decMath[decKey]);
        }
        var decAvg = function() {
            return (parseInt(decGrades[0],10) +  parseInt(decGrades[1],10))/2;
        }

        $scope.decResultsUnRounded = decAvg() * 0.05;
        $scope.decResults = Math.round(100*$scope.decResultsUnRounded)/100;

        // calculate the average and update the message
        $scope.firstYearAverage = avg(firstYearGrades);
        $scope.secondYearAverage = avg(secondYearGrades);
        $scope.thirdYearAverage = avg(thirdYearGrades);
        $scope.fourthYearAverage = avg(fourthYearGrades);

        $scope.totalResults = [$scope.firstYearAverage, $scope.secondYearAverage, $scope.thirdYearAverage, $scope.fourthYearAverage];

        $scope.firstYearWAverage = wAvgFirst(firstYearGrades);
        $scope.secondYearWAverage = wAvgSecond(secondYearGrades);
        $scope.thirdYearWAverage = wAvgThird(thirdYearGrades);
        $scope.fourthYearWAverage = wAvgFourth(fourthYearGrades);

        $scope.totalWResults = [$scope.firstYearWAverage, $scope.secondYearWAverage, $scope.thirdYearWAverage, $scope.fourthYearWAverage];

        $scope.resultsObject = [$scope.totalResults, $scope.totalWResults];

        $scope.firstYearResult = [$scope.firstYearAverage, $scope.firstYearWAverage];
        $scope.secondYearResult = [$scope.secondYearAverage, $scope.secondYearWAverage];
        $scope.thirdYearResult = [$scope.thirdYearAverage, $scope.thirdYearWAverage];
        $scope.fourthYearResult = [$scope.fourthYearAverage, $scope.fourthYearWAverage];


        $scope.results = [$scope.firstYearResult, $scope.secondYearResult, $scope.thirdYearResult, $scope.fourthYearResult];

        $scope.multiplier = [1 / 14 * 0.95, 3 / 14 * 0.95, 5 / 14 * 0.95 , 5 / 14 * 0.95];

        $scope.overallTotalUnRounded =  $scope.firstYearResult[1] * $scope.multiplier[0] + $scope.secondYearResult[1] * $scope.multiplier[1] + $scope.thirdYearResult[1] * $scope.multiplier[2]+$scope.fourthYearResult[1] * $scope.multiplier[3];
        $scope.overallTotal =  Math.round(100* ( $scope.firstYearResult[1] * $scope.multiplier[0] + $scope.secondYearResult[1] * $scope.multiplier[1] + $scope.thirdYearResult[1] * $scope.multiplier[2]+$scope.fourthYearResult[1] * $scope.multiplier[3]))/100;


        $scope.overallDecTotal = Math.round(100 * ($scope.overallTotalUnRounded + $scope.decResultsUnRounded))/100;


        if ($scope.overallDecTotal >= 70) {
            $scope.overallDecClass = "First Class";
        }
        else if ($scope.overallDecTotal >= 60 && $scope.overallDecTotal < 70) {
            $scope.overallDecClass = "2.1";
        }
        else if ($scope.overallDecTotal >= 50 && $scope.overallDecTotal < 60) {
            $scope.overallDecClass = "2.2";
        }
        else if ($scope.overallDecTotal >= 40 && $scope.overallDecTotal < 50) {
            $scope.overallDecClass = "Third";
        }
        else {
            $scope.overallDecClass = "Fail";
        }

    };


    // calculate the average of an array
    var avg = function (numbers) {
        var sum = 0;

        angular.forEach(numbers, function (number) {
            sum += number;
        });

        return Math.round(100 * (sum / numbers.length)) / 100;
    };


    var wAvgFirst = function (numbers) {
        var sum = 0;
        var sortNumbers = numbers.sort(function (a, b) {
            return a - b;
        });
        var sortedNumbers = sortNumbers.slice(4, sortNumbers.length);
        angular.forEach(sortedNumbers, function (number) {
            sum += number;
        });

        sum = (sum + (sortNumbers[0] + sortNumbers[1] + sortNumbers[2] + sortNumbers[3]) * 0.5);

        return Math.round((sum / 6) * 100) / 100;
    }


    var wAvgSecond = function (numbers) {
        var sum = 0;
        var sortNumbers = numbers.sort(function (a, b) {
            return a - b;
        });
        var sortedNumbers = sortNumbers.slice(2, sortNumbers.length);
        angular.forEach(sortedNumbers, function (number) {
            sum += number;
        });

        sum = sum + (sortNumbers[0] + sortNumbers[1]) * 0.5;

        return Math.round((sum / (numbers.length-1)) * 100) / 100;
    }

    var wAvgThird = function (numbers) {
        var sum = 0;
        var sortNumbers = numbers.sort(function (a, b) {
            return a - b;
        });
        var sortedNumbers = sortNumbers.slice(2, sortNumbers.length);
        angular.forEach(sortedNumbers, function (number) {
            sum += number;
        });

        sum = sum + (sortNumbers[0] + sortNumbers[1]) * 0.5;

        return Math.round((sum / (numbers.length-1)) * 100) / 100;
    }

    var wAvgFourth = function (numbers) {
        var sum = 0;

        angular.forEach(numbers, function (number) {
            sum += number;
        });

        return Math.round(100 * (sum / numbers.length)) / 100;
    }



});
