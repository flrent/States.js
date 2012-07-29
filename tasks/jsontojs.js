module.exports = function(grunt) {

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('jsontojs', 'Convert json to a js file.', function() {
    var destfile = this.file.dest;
    grunt.log.writeln(destfile);


    grunt.file.expandFiles(this.file.src).forEach(function(filepath){
      grunt.file.write(destfile,grunt.helper('jsontojs',grunt.file.read(filepath)));
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
  grunt.registerHelper('jsontojs', function(file) {  
    return "var states = (function(){ return " + file + ";}());";
  });

};