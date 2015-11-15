(function () {

    var cv = angular.module('cv');

    cv.service('ddosService',['$rootScope', '$http', function($rootScope, $http) {

        return {

            getLine: function() {
                return $http.get('action/ddos/line');
            }

            , uploadFile: function() {
                return $http.post('action/ddos/uploadFile');
            }

            , parseAttackFile: function() {
            	return $http.post('action/ddos/parseAttackFile');
            }

            , getGroupedSourceIps: function(threshold, limit, source) {
                return $http.get('action/ddos/groupedIps?threshold=' + threshold + '&limit=' + limit + '&order=desc' + '&source=' + source);
            }

            , getPacketCount: function(start, end, increment, list) {
				return $http.post('action/ddos/packetCount', {
					start: start,
					end: end,
					increment: increment,
					 list: list
				});
			}

			, defaults: {
				source: true,
				threshold: 2000,
				amountToReturn: 50,
				attackList: [{"name":"pod","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 08:38:52","timeTo":"1999-04-05 08:41:02"},{"name":"portsweep","source":"*","destination":"192.168.1.1","increment":"1","timeFrom":"1999-04-05 08:42:17","timeTo":"1999-04-05 08:44:18"},{"name":"portsweep","source":"*","destination":"192.168.1.1","increment":"1","timeFrom":"1999-04-05 08:44:13","timeTo":"1999-04-05 08:46:14"},{"name":"portsweep","source":"*","destination":"192.168.1.1","increment":"1","timeFrom":"1999-04-05 08:46:09","timeTo":"1999-04-05 08:48:10"},{"name":"pod","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 08:47:33","timeTo":"1999-04-05 08:49:38"},{"name":"pod","source":"*","destination":"202.77.162.213","increment":"1","timeFrom":"1999-04-05 08:48:03","timeTo":"1999-04-05 08:50:04"},{"name":"warezclient","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 08:58:16","timeTo":"1999-04-05 09:00:57"},{"name":"warezclient","source":"*","destination":"207.75.239.115","increment":"1","timeFrom":"1999-04-05 08:58:45","timeTo":"1999-04-05 09:00:46"},{"name":"smurf","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:32:00","timeTo":"1999-04-05 09:36:00"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:42:11","timeTo":"1999-04-05 09:44:19"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:42:24","timeTo":"1999-04-05 09:44:25"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:42:31","timeTo":"1999-04-05 09:44:34"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:42:35","timeTo":"1999-04-05 09:44:38"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:42:43","timeTo":"1999-04-05 09:44:44"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:42:50","timeTo":"1999-04-05 09:44:52"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:42:57","timeTo":"1999-04-05 09:44:58"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:43:04","timeTo":"1999-04-05 09:45:08"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:43:09","timeTo":"1999-04-05 09:45:13"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:43:18","timeTo":"1999-04-05 09:45:19"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:43:25","timeTo":"1999-04-05 09:45:29"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:43:34","timeTo":"1999-04-05 09:45:35"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:43:41","timeTo":"1999-04-05 09:45:43"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:43:44","timeTo":"1999-04-05 09:45:49"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:43:54","timeTo":"1999-04-05 09:45:55"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:44:01","timeTo":"1999-04-05 09:46:04"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:44:05","timeTo":"1999-04-05 09:46:07"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:44:12","timeTo":"1999-04-05 09:46:13"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:44:19","timeTo":"1999-04-05 09:46:28"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:44:29","timeTo":"1999-04-05 09:46:39"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:44:44","timeTo":"1999-04-05 09:46:45"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:44:52","timeTo":"1999-04-05 09:47:02"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:45:03","timeTo":"1999-04-05 09:47:14"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:45:15","timeTo":"1999-04-05 09:47:21"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:45:26","timeTo":"1999-04-05 09:47:27"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:45:33","timeTo":"1999-04-05 09:47:34"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:45:35","timeTo":"1999-04-05 09:47:36"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:45:37","timeTo":"1999-04-05 09:47:48"},{"name":"portsweep","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 09:45:53","timeTo":"1999-04-05 09:47:54"},{"name":"apache2","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 10:28:22","timeTo":"1999-04-05 10:47:59"},{"name":"apache2","source":"*","destination":"202.77.162.213","increment":"1","timeFrom":"1999-04-05 10:28:28","timeTo":"1999-04-05 10:30:50"},{"name":"guesstelnet","source":"*","destination":"172.16.118.80","increment":"1","timeFrom":"1999-04-05 10:57:14","timeTo":"1999-04-05 11:01:00"},{"name":"guesstelnet","source":"*","destination":"172.16.118.80","increment":"1","timeFrom":"1999-04-05 10:59:01","timeTo":"1999-04-05 11:02:34"},{"name":"guesstelnet","source":"*","destination":"192.5.41.239","increment":"1","timeFrom":"1999-04-05 10:59:03","timeTo":"1999-04-05 11:01:04"},{"name":"dosnuke","source":"*","destination":"172.16.112.100","increment":"1","timeFrom":"1999-04-05 11:44:27","timeTo":"1999-04-05 12:03:00"},{"name":"loadmodule","source":"*","destination":"172.16.113.50","increment":"1","timeFrom":"1999-04-05 12:02:14","timeTo":"1999-04-05 12:15:29"},{"name":"ffbconfig","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 12:10:18","timeTo":"1999-04-05 12:24:46"},{"name":"smurf","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 01:17:12","timeTo":"1999-04-05 01:19:13"},{"name":"arppoison","source":"*","destination":"172.16.112.100","increment":"1","timeFrom":"1999-04-05 01:29:14","timeTo":"1999-04-05 01:31:31"},{"name":"arppoison","source":"*","destination":"172.16.112.100","increment":"1","timeFrom":"1999-04-05 01:32:52","timeTo":"1999-04-05 01:45:51"},{"name":"apache2","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 02:04:43","timeTo":"1999-04-05 02:16:47"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:04:47","timeTo":"1999-04-05 02:06:48"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:10:48","timeTo":"1999-04-05 02:12:49"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:12:02","timeTo":"1999-04-05 02:14:03"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:12:16","timeTo":"1999-04-05 02:14:17"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:12:56","timeTo":"1999-04-05 02:14:57"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:13:05","timeTo":"1999-04-05 02:15:06"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:13:52","timeTo":"1999-04-05 02:15:53"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:13:55","timeTo":"1999-04-05 02:15:56"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:14:06","timeTo":"1999-04-05 02:16:07"},{"name":"apache2","source":"*","destination":"152.169.215.104","increment":"1","timeFrom":"1999-04-05 02:14:19","timeTo":"1999-04-05 02:16:20"},{"name":"apache2","source":"*","destination":"206.48.44.50","increment":"1","timeFrom":"1999-04-05 02:15:51","timeTo":"1999-04-05 02:17:52"},{"name":"pod","source":"*","destination":"172.16.113.50","increment":"1","timeFrom":"1999-04-05 02:21:30","timeTo":"1999-04-05 02:23:31"},{"name":"imap","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 02:45:19","timeTo":"1999-04-05 02:47:29"},{"name":"ipsweep","source":"*","destination":"172.16.113.1","increment":"1","timeFrom":"1999-04-05 02:59:16","timeTo":"1999-04-05 03:01:17"},{"name":"ipsweep","source":"*","destination":"172.16.113.3","increment":"1","timeFrom":"1999-04-05 03:03:06","timeTo":"1999-04-05 03:05:07"},{"name":"ipsweep","source":"*","destination":"172.16.113.5","increment":"1","timeFrom":"1999-04-05 03:06:56","timeTo":"1999-04-05 03:08:57"},{"name":"ipsweep","source":"*","destination":"172.16.113.4","increment":"1","timeFrom":"1999-04-05 03:10:46","timeTo":"1999-04-05 03:12:47"},{"name":"ipsweep","source":"*","destination":"172.16.113.50","increment":"1","timeFrom":"1999-04-05 03:14:36","timeTo":"1999-04-05 03:16:37"},{"name":"ipsweep","source":"*","destination":"204.233.47.21","increment":"1","timeFrom":"1999-04-05 03:14:36","timeTo":"1999-04-05 03:16:37"},{"name":"dict","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 04:31:17","timeTo":"1999-04-05 04:33:27"},{"name":"dict","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 04:31:28","timeTo":"1999-04-05 04:33:59"},{"name":"dict","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 04:32:00","timeTo":"1999-04-05 04:34:22"},{"name":"dict","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 04:32:23","timeTo":"1999-04-05 04:43:03"},{"name":"dict","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 04:41:04","timeTo":"1999-04-05 04:47:09"},{"name":"dict","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 04:45:10","timeTo":"1999-04-05 04:49:52"},{"name":"syslogd","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 05:18:10","timeTo":"1999-04-05 05:35:11"},{"name":"neptune","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 06:03:04","timeTo":"1999-04-05 06:11:55"},{"name":"crashiis","source":"*","destination":"172.16.112.100","increment":"1","timeFrom":"1999-04-05 06:35:11","timeTo":"1999-04-05 06:52:18"},{"name":"ls_domain","source":"*","destination":"172.16.112.20","increment":"1","timeFrom":"1999-04-05 06:56:21","timeTo":"1999-04-05 06:58:22"},{"name":"dosnuke","source":"*","destination":"172.16.115.234","increment":"1","timeFrom":"1999-04-05 07:47:01","timeTo":"1999-04-05 08:05:42"},{"name":"pstorm","source":"*","destination":"172.16.113.*ud","increment":"1","timeFrom":"1999-04-05 07:59:27","timeTo":"1999-04-05 08:16:27"},{"name":"pstorm","source":"*","destination":"172.16.112.*ud","increment":"1","timeFrom":"1999-04-05 07:59:27","timeTo":"1999-04-05 08:16:27"},{"name":"selfping","source":"*","destination":"172.16.112.50","increment":"1","timeFrom":"1999-04-05 08:16:12","timeTo":"1999-04-05 08:21:15"},{"name":"ncftp","source":"*","destination":"172.16.114.50","increment":"1","timeFrom":"1999-04-05 08:45:13","timeTo":"1999-04-05 08:48:42"},{"name":"ncftp","source":"*","destination":"172.16.118.70","increment":"1","timeFrom":"1999-04-05 08:45:35","timeTo":"1999-04-05 08:48:22"}],

				timeFrom:'1999-04-05 08:39:50',
				timeTo: '1999-04-05 08:40:04',
				increment: 1,
				seriesAIpSource: '*',
				seriesAIpDestination: '172.16.112.50',


//				timeFrom:'1999-03-08 08:00:00',
//				timeTo: '1999-03-08 08:25:00',
//				increment: 1,
//				seriesAIpSource: '*',
//				seriesAIpDestination: '172.16.112.100',



//				timeFrom:'1999-03-08 08:45:00',
//				timeTo: '1999-03-08 09:25:00',
//				increment: 1,
//				seriesAIpSource: '*',
//				seriesAIpDestination: '172.16.113.50',



//				timeFrom:'1999-03-08 09:30:00',
//				timeTo: '1999-03-08 09:50:00',
//				increment: 1,
//				seriesAIpSource: '*',
//				seriesAIpDestination: '172.16.114.50',



//				timeFrom:'1999-03-08 12:00:00',
//				timeTo: '1999-03-08 12:25:00',
//				increment: 1,
//				seriesAIpSource: '*',
//				seriesAIpDestination: '172.16.112.50',



//				timeFrom:'1999-03-08 15:50:00',
//				timeTo: '1999-03-08 16:10:00',
//				increment: 1,
//				seriesAIpSource: '*',
//				seriesAIpDestination: '172.16.112.50',



//				timeFrom:'1999-03-08 17:20:00',
//				timeTo: '1999-03-08 17:40:00',
//				increment: 1,
//				seriesAIpSource: '*',
//				seriesAIpDestination: '172.16.114.50',



//				timeFrom:'1999-03-08 19:00:00',
//				timeTo: '1999-03-08 19:25:00',
//				increment: 1,
//				seriesAIpSource: '*',
//				seriesAIpDestination: '172.16.112.50',



				seriesBIpSource: '19*',
				seriesBIpDestination: '172.*'
			}

        };

    }]);

}());