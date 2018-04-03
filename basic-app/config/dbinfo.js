var DBinfo = {
    HOST : 'https://sharedvn.herokuapp.com/',
    DB_HOST : "ec2-54-83-11-247.compute-1.amazonaws.com",
    DB_USER : "eocqwtajlynoie",
    DB_PASS : "2c261990dabc20e974329c0a32fda69e96cb630145369f897ddd428a4aa847e2",
    DB_NAME : "d7ksq9bp191tbp",
    DB_PORT:5432,
    DB_URI:"postgres://eocqwtajlynoie:2c261990dabc20e974329c0a32fda69e96cb630145369f897ddd428a4aa847e2@ec2-54-83-11-247.compute-1.amazonaws.com:5432/d7ksq9bp191tbp"
  }

  var DB_AZURE = {
    HOST : 'https://sharedvn.herokuapp.com/',
    DB_HOST : "sharedvn.postgres.database.azure.com",
    DB_USER : "swift@sharedvn",
    DB_PASS : "Khanhnhat2015",
    DB_NAME : "d7ksq9bp191tbp",
    DB_PORT:5432,
    DB_URI:"postgres://eocqwtajlynoie:2c261990dabc20e974329c0a32fda69e96cb630145369f897ddd428a4aa847e2@ec2-54-83-11-247.compute-1.amazonaws.com:5432/d7ksq9bp191tbp"
  }
  
  var DBinfo_Local = {
    HOST : 'http://localhost:3000',
    DB_HOST : "localhost",
    DB_USER : "postgres",
    DB_PASS : " ",
    DB_NAME : "postgres",
    DB_PORT:5432,
    DB_URI:"postgres://qvzvtjauhzropu:c087874943573c298d0a28c25e792e2f7b81c04fa54d7b6535f8cff7038acbf1@ec2-54-225-192-243.compute-1.amazonaws.com:5432/ddhdumkvmao8v3"
  }
  
  module.exports =  {Config:DBinfo, Local:DBinfo_Local, azure : DB_AZURE};
  