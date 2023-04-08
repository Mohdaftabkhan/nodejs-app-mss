const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.232.3.76:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    //'sonar.projectKey':'NodeJsMithunTechnologies',
	    //'sonar.login': '45dff1fa7b92468a200de33e76b17c05fe9fb8e1',
	    'sonar.login': 'admin',
	    'sonar.password': 'Hussain@786',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
