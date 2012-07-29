module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('jsontojson', 'Convert src json to release json.', function() {
    var destfile = this.file.dest;
    grunt.log.writeln(destfile);


    grunt.file.expandFiles(this.file.src).forEach(function(filepath){
      grunt.file.write(destfile,grunt.helper('jsontojson',grunt.file.read(filepath)));
    });
    
    // Fail task if errors were logged.
    if (this.errorCount) { return false; }

    // Otherwise, print a success message.
    grunt.log.writeln('File converted.');
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  // Concat source files and/or directives.
  grunt.registerHelper('jsontojson', function(file) { 
    //we may want to change the file somehow in the future. 
    return file;
  });

};